require "rails_helper"

RSpec.describe User, type: :model do
  it "is valid with valid attributes" do
    user = User.new(name: "John Doe", email: "john@example.com")
    expect(user).to be_valid
  end

  it "is not valid without a name" do
    user = User.new(name: nil, email: "john@example.com")
    expect(user).not_to be_valid
  end
end
