class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.datetime :start
      t.datetime :stop
      t.string   :url
      t.references :winner
      t.timestamps
    end
  end
end
