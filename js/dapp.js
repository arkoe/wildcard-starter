window.onload = function() {
	if (typeof web3 !== 'undefined') {
	  web3 = new Web3(web3.currentProvider);
	} else {
	  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	}

	var byteCode = ''; // Bytecode invullen
	var contractABI = [];// ABI invullen

	$("#submit").click(function(){
		
		$(this).attr('disabled', true).val('Loading...');

		var WildCard = web3.eth.contract(contractABI).new(
			{
				from: web3.eth.accounts[0], 
				data: byteCode,
				gas: 3000000
			}, function(error, contract){

			if(error) {
				alert("There was an error deploying your token: " + String(error));
			}
		
			if(typeof contract.address !== "undefined") {
				alert('Contract deployed! Address ' + contract.address);
			}

			if(typeof contract.address === "undefined") {
				alert.log("Your token is being deployed with this transaction hash: " + String(contract.transactionHash));
			}
			
		});
	});	
}