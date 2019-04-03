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
            if (Adapt.config.has('_completionCriteria')) this.customConfig = Adapt.config.get('_completionCriteria')._custom;
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

        setCustomCompleted: function(menuView) {
            var menuModel = menuView.model;
        },
        
        setCustomCompleted: function (pageView) {
            var _sCurrentScreenId = pageView.model.get('_id');
            //console.log('>>>>>> checkCourseStatus - _sCurrentScreenId - ', _sCurrentScreenId);
            if(_sCurrentScreenId == 'co-55') {
               /*  if(_bPreScore == undefined) _bFinalScore = _bPostScore; 
                if(_bPostScore == undefined) _bFinalScore = _bPreScore;  */
                Adapt.course.set('_isComplete', true);
                Adapt.course.set('_isAssessmentPassed', this.checkCourseCompleted());
                //TODO: score
                //Adapt.offlineStorage.set("score", _bFinalScore, 0, 100);
                this.setContentCompleted();
                //console.log('>>>>>> checkCourseStatus - Adapt.course.get(_isComplete) - ', Adapt.course.get('_isComplete'));
                //console.log('>>>>>> checkCourseStatus - Adapt.course.get(_isAssessmentPassed) - ', Adapt.course.get('_isAssessmentPassed'));
            }
        },

        setContentCompleted: function() {
            var _sCompletionData = Adapt.offlineStorage.get('completion');
            _sCompletionData = _sCompletionData.replace(/0/g, 1);
            //console.log('>>>>>> before setContentCompleted - Adapt.offlineStorage.get(completion)', Adapt.offlineStorage.get('completion'));
            Adapt.offlineStorage.set('completion', _sCompletionData);
            //console.log('>>>>>> after setContentCompleted - Adapt.offlineStorage.get(completion)', Adapt.offlineStorage.get('completion'));
        },
        
        checkCourseCompleted: function() {
            /*var _aModuleCompletionStatus = Adapt.RoutingAndRecordKeeping.moduleCompletionStatus,
                _nModuleCompletionStatusLen = _aModuleCompletionStatus.length,
                _bAllSectionsPassed = true;
            for(var i=0;i<_nModuleCompletionStatusLen;i++) {
                if(_aModuleCompletionStatus[i] == false) {
                    _bAllSectionsPassed = false;
                    break;
                }
            }

            return _bAllSectionsPassed;*/
        },

    });

    return new CustomCompletion();

});
