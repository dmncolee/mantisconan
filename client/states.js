angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.loginconfident', {
        views: {
            app: {
                controller: 'app_loginconfident',
                templateProvider: function (app) {
                    return app.templateProvider('app.loginconfident');
                }
            }
        }
    }).state('app.viewissues', {
        views: {
            app: {
                controller: 'app_viewissues',
                templateProvider: function (app) {
                    return app.templateProvider('app.viewissues');
                }
            }
        }
    }).state('app.tableviewadvaced', {
        views: {
            app: {
                controller: 'app_tableviewadvaced',
                templateProvider: function (app) {
                    return app.templateProvider('app.tableviewadvaced');
                }
            }
        }
    }).state('app.reportissue', {
        views: {
            app: {
                controller: 'app_reportissue',
                templateProvider: function (app) {
                    return app.templateProvider('app.reportissue');
                }
            }
        }
    });
});