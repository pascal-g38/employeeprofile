sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'employeeprofile/test/integration/FirstJourney',
		'employeeprofile/test/integration/pages/EmployeeProfileList',
		'employeeprofile/test/integration/pages/EmployeeProfileObjectPage'
    ],
    function(JourneyRunner, opaJourney, EmployeeProfileList, EmployeeProfileObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('employeeprofile') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEmployeeProfileList: EmployeeProfileList,
					onTheEmployeeProfileObjectPage: EmployeeProfileObjectPage
                }
            },
            opaJourney.run
        );
    }
);