/*
addBonusLanguages() - returns Randomly selected Kitsune Bonus Languages
*/
function addBonusLanguages() {
	var bonusLanguages = [
		{"language": "Amabie"},
		{"language": "Bakemono"},
		{"language": "Bakeneko"},
		{"language": "Inugami"},
		{"language": "Jorōgumo"},
		{"language": "Kappa"},
		{"language": "Karura"},
		{"language": "Komainu"},
		{"language": "Koropokuru"},
		{"language": "Kuda-gitsune"},
		{"language": "Mikoshi-nyūdō"},
		{"language": "Mizuchi"},
		{"language": "Mujina"},
		{"language": "Namahage"},
		{"language": "Troglodyte"},
		{"language": "Nekomata"},
		{"language": "Ningyo"},
		{"language": "Nue"},
		{"language": "Nure-onna"},
		{"language": "Ogre-magi"},
		{"language": "Oni"},
		{"language": "Onikuma"},
		{"language": "Ryuu"},
		{"language": "Shojo"},
		{"language": "Tengu"}
			];
    return bonusLanguages[Math.floor(Math.random() * bonusLanguages.length)]; 
}