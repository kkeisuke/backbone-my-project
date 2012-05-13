(function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.ProjectName = {
    app: null,
    router: null
  };

  ProjectName.AppView = (function(_super) {

    __extends(AppView, _super);

    function AppView() {
      AppView.__super__.constructor.apply(this, arguments);
    }

    AppView.prototype.el = "#projectName-app";

    AppView.prototype.initialize = function() {
      this.$el.on("click", "a", function(e) {
        ProjectName.router.navigate($(e.target).attr("href"), true);
        e.preventDefault();
        return this;
      });
      return this;
    };

    return AppView;

  })(Backbone.View);

  ProjectName.Router = (function(_super) {

    __extends(Router, _super);

    function Router() {
      this._parseParams = __bind(this._parseParams, this);
      Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.routes = {
      "": "home",
      "login/*": "login",
      "users/:id*opts": "users",
      "get/data*opts": "get_data"
    };

    Router.prototype.initialize = function() {
      console.log("initialize");
      return this;
    };

    Router.prototype.home = function() {
      console.log("home");
      return this;
    };

    Router.prototype.login = function() {
      console.log("login");
      return this;
    };

    Router.prototype.users = function(id, opts) {
      console.log("users");
      console.log(id);
      console.log(this._parseParams(opts));
      return this;
    };

    Router.prototype.get_data = function(opts) {
      console.log("get_data");
      console.log(this._parseParams(opts));
      return this;
    };

    Router.prototype._parseParams = function(param) {
      var params, val, vals, _i, _len, _ref;
      if (param && (typeof param === "string") && param !== "/") {
        params = {};
        _ref = param.slice(2).split("&");
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          val = _ref[_i];
          vals = val.split("=");
          params[vals[0]] = vals[1];
        }
      }
      return params;
    };

    return Router;

  })(Backbone.Router);

  $(function() {
    Backbone.emulateJSON = true;
    ProjectName.app = new ProjectName.AppView;
    ProjectName.router = new ProjectName.Router;
    return Backbone.history.start({
      pushState: true
    });
  });

}).call(this);
