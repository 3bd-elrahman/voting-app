class Result < ApplicationRecord
  self.table_name="votes"
  validates :name,:country,:team,:goal_keeper,:defender,:midfielder,:striker, presence: true
end
