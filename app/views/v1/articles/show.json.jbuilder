json.extract! @article, :id, :title, :description
json.user do
  json.id @article.user.id
  json.fullname @article.user.fullname # Assuming users have a name attribute
end
json.sections @article.sections do |section|
  json.extract! section, :id, :title, :text, :image
end
