class ChangeDataTypeForBookmark < ActiveRecord::Migration[6.0]
  def change
    change_table(:bookmarks) do |t|
      t.change :comment, :text
    end
  end
end
