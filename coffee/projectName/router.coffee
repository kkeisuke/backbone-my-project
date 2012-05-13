# ============================================
# Router
# ============================================
class ProjectName.Router extends Backbone.Router
  routes:
    "":"home"
    "login/*":"login"
    "users/:id*opts":"users"
    "get/data*opts":"get_data"
    
  initialize:->
    console.log "initialize"
    # ProjectName.app.methods
    @
  
  home:->
    console.log "home"
    @
  
  login:->
    console.log "login"
    @
  
  users:(id, opts)->
    console.log "users"
    console.log id
    console.log @_parseParams opts
    @
  
  get_data:(opts)->
    console.log "get_data"
    console.log @_parseParams opts
    @
  
  _parseParams:(param)=>
    if param && (typeof param == "string") && param != "/"
      params = {}
      for val in param.slice(2).split "&"
        vals = val.split "="
        params[vals[0]] = vals[1];
    params