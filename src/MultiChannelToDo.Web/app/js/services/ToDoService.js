'use strict';
var apiPath = "http://mobilehol-code.azurewebsites.net/tables";
multiChannelToDoApp
    .factory('toDoService', ['$http', function ($http) {
        return {

            getItems: function () {
                return $http.get(apiPath + '/TodoItem');
            },

            add: function (id, task) {
                return $http.post(apiPath + '/TodoItem', { text": task, "complete": false });
            },

            complete: function (item) {
                return $http.put(apiPath + '/TodoItem/' + item.Id, { "id": item.Id, "text": item.Text, "complete": true });
            }
        }
    }]);
