# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "enchantedcode-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Leo Spratt"]
  spec.email         = ["enchant97@users.noreply.github.com"]

  spec.summary       = "The offical enchantedcode jekyll theme"
  spec.homepage      = "https://github.com/enchant97/enchantedcode-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", ">= 3.9", "< 5.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.15.1"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.7.1"
  spec.add_development_dependency "bundler", ">= 1.15"
end
