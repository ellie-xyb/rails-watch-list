class AddBgUrlToList < ActiveRecord::Migration[6.0]
  def change
    add_column :lists, :bg_url, :string
  end
end
