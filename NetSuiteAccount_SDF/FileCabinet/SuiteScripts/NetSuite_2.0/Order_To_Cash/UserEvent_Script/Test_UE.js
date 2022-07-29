/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */
define(['N/record'],

function(record) {
   
  
    function beforeLoad(scriptContext) {
    	log.debug('Test_Branch_4');
    }

    function beforeSubmit(scriptContext) {
    	log.debug('Test for Release33 changes');
    }

    function afterSubmit(scriptContext) {

    }

    return {
        beforeLoad: beforeLoad,
        beforeSubmit: beforeSubmit,
        afterSubmit: afterSubmit
    };
    
});
