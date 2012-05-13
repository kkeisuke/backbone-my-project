# ============================================
# Application
# ============================================
class ProjectName.AppView extends Backbone.View
  el: "#projectName-app"
  
  initialize:->
    # new Views
    
    @$el.on "click", "a", (e)->
      ProjectName.router.navigate $(e.target).attr("href"), true
      e.preventDefault()
      @
    @