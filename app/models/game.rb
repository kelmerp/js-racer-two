class Game < ActiveRecord::Base
  has_many :rounds
  has_many :players, through: :rounds
  belongs_to :winner, class_name: "Player"
  # include ActiveModel::Validations
  # validates_with twoPlayers

  def get_new_url
    self.update_attributes(url: "#{(0...50).map{ ('a'..'z').to_a[rand(26)] }.join}")
  end
end

# class twoPlayers < ActiveModel::EachValidator
#   def validate_each(record, attribute, value)
#     unless value == 2
#       record.error[attribute] << (options[:message] || "you must have two playesr")
#     end
#   end
# end
