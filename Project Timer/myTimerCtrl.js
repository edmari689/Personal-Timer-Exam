app.controller('myTimerCtrl', function($scope, $timeout) {
			$scope.name = "";
			$scope.t1 = 0;
			$scope.t2 = 0;
			$scope.t3 = 0;
			$scope.t4 = 0;
			$scope.t5 = 0;
			$scope.counter = 30;
			var mytimeout;
 
			$scope.countdown = function() {
				mytimeout = $timeout($scope.onTimeout, 1000);
			};
			
			$scope.stop = function() {
				$scope.$broadcast('timer-stopped', $scope.counter);
				$timeout.cancel(mytimeout);
			};
			
			$scope.onTimeout = function() {
				if($scope.counter ===  0) {
					$scope.$broadcast('timer-stopped', 0);
					$timeout.cancel(mytimeout);
					$scope.openResult = true;
					return;
				}
				$scope.counter--;
				mytimeout = $timeout($scope.onTimeout, 1000);
			};
		});