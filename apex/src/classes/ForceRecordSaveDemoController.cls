public with sharing class ForceRecordSaveDemoController {
	
    @AuraEnabled
    public static List<Account> getAccounts() {
        return [
            SELECT
            	Id
            	,Name
            	,AccountNumber
            FROM
            	Account
            ORDER BY Name ASC
            LIMIT 200
        ];
    }
}