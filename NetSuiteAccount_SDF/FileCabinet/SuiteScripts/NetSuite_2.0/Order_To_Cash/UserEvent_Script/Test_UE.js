/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */
define(['N/record'],

function(record) {
   
  
    function beforeLoad(scriptContext) {
    	log.debug('Test1');
    }

    function beforeSubmit(scriptContext) {
    	log.debug('Test2 for Test_Branch_2 changes');
    }

    function afterSubmit(scriptContext) {

    }

    return {
        beforeLoad: beforeLoad,
        beforeSubmit: beforeSubmit,
        afterSubmit: afterSubmit
    };
    
});
