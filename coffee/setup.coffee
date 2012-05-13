# ============================================
# Namespace convention / File naming
# http://ricostacruz.com/backbone-patterns/#conventions
# ============================================
$ ->
  Backbone.emulateJSON = true
  # new Models
  ProjectName.app = new ProjectName.AppView
  ProjectName.router = new ProjectName.Router
  Backbone.history.start pushState: true