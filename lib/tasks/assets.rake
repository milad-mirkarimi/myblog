namespace :assets do
  desc "Empty task because heroku runs it as well"
  task :clean do
    puts :noop
  end

  desc "Build frontend"
  task build: :environment do
    system "bash ./bin/build-client.sh"
  end

  desc "Compile & Verify frontend and API docs"
  task precompile: :environment do
    Rake::Task["assets:build"].invoke
    Rake::Task["assets:verify"].invoke
  end

  desc "Verify assets"
  task verify: :environment do
    [
      Rails.root.join("public", "index.html"),
    ].each do |filename|
      unless File.file?(Rails.root.join(filename))
        puts "File #{filename} is missing"
        exit(1)
      end
    end
  end
end
