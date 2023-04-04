# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  has_secure_password
  before_validation :ensure_session_token

  has_many(
    :listings,
    foreign_key: :lister_id,
    primary_key: :id,
    class_name: :Listing,
    dependent: :destroy
  ) 

  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email.downcase)

    return false if !user

    if user.authenticate(password)
      return user
    else
      return false
    end

  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.update!(session_token: session_token)
    self.session_token
  end

  private

  def generate_unique_session_token
    session_token = SecureRandom::urlsafe_base64
    while User.exists?(session_token: session_token) do
      session_token = SecureRandom::urlsafe_base64
    end
    return session_token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

end
