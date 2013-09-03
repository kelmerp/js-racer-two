class Player < ActiveRecord::Base
  has_many :rounds
  has_many :games, through: :rounds
  has_many :wins, class_name: "Game", foreign_key: "winner_id"
end
