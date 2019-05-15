define([
    'core/js/adapt'
], function(Adapt) {

    var CustomCompletion = Backbone.Controller.extend({

        customConfig: undefined,
    
        initialize: function () {
            this.listenToOnce(Adapt, "router:location", this.onAdaptInitialize);
            //this.listenToOnce(Adapt, "pageView:ready menuView:ready", this.getCustomCompleted);
        },

        onAdaptInitialize: function() {
            if (!this.checkIsCustomCompletion()) return;
            this.setupEventListeners();
        },

        checkIsCustomCompletion: function() {
            if (!Adapt.offlineStorage) return false;
            if (Adapt.config.has('_completionCriteria')) this.customConfig = Adapt.config.get('_completionCriteria')._customCompletion;
            if(this.customConfig == undefined) return false;
            return true;
        },

        setupEventListeners: function() {
            //this.listenTo(Adapt, 'menuView:ready', this.setCustomCompleted);
            this.listenTo(Adapt, 'pageView:preRender', this.setCustomCompleted);
        },

        getCustomCompleted: function() {
            //TODO:
        },

        /*setCustomCompleted: function(menuView) {
            var menuModel = menuView.model;
        },*/
        
        setCustomCompleted: function (pageView) {
            var _sCurrentScreenId = pageView.model.get('_id'),
                _sPageId = this.customConfig._requirePageVisited;

            //Scenario I: On visit a page.
            console.log('_sCurrentScreenId - ', _sCurrentScreenId, ' _sPageId - ', _sPageId);
            if(_sPageId != undefined) {
                if(_sCurrentScreenId == _sPageId) {
                    Adapt.course.set('_isComplete', true);
                    //Please see _requireAssessmentCompleted/lms configuration before setting stiffly
                    Adapt.course.set('_isAssessmentPassed', true);
                    this.setContentCompleted();
                }
            }
            
            //Scenario II: On visit a component. In progress...

        },

        setContentCompleted: function() {
            var _sCompletionData = Adapt.offlineStorage.get('completion');
            _sCompletionData = _sCompletionData.replace(/0/g, 1);
            Adapt.offlineStorage.set('completion', _sCompletionData);
        }
    });

    return new CustomCompletion();

});