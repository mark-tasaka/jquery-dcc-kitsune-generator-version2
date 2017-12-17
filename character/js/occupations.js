 
//  getOccupation() - returns the Randomly Generated Occupation
function getOccupation(){
	var occupations = [
		
		{"occupation": "Kitsune potter", "race": "Kitsune", "trainedWeapon": "Staff", "damage": "1d4", "tradeGoods": "Clay, 1 lbs."},
		{"occupation": "Kitsune sword polisher", "race": "Kitsune", "trainedWeapon": "Wakizashi (short sword)", "damage": "1d6", "tradeGoods": "Whetstone"},
		{"occupation": "Kitsune geisha", "race": "Kitsune", "trainedWeapon": "Dagger", "damage": "1d4", "tradeGoods": "Whig & make-up"},
		{"occupation": "Kitsune musician", "race": "Kitsune", "trainedWeapon": "Staff", "damage": "1d4", "tradeGoods": "Koto (harp)"},
		{"occupation": "Kitsune silk dyer", "race": "Kitsune", "trainedWeapon": "Scissors (as dagger)", "damage": "1d4", "tradeGoods": "Silk, 3 yards"},
		{"occupation": "Kitsune sake brewer", "race": "Kitsune", "trainedWeapon": "Mallet (as club)", "damage": "1d4", "tradeGoods": "1 bottle of sake"},
		{"occupation": "Kitsune haiku poet", "race": "Kitsune", "trainedWeapon": "Staff", "damage": "1d4", "tradeGoods": "Quill pen & ink"},
		{"occupation": "Kitsune ink merchant", "race": "Kitsune", "trainedWeapon": "Wakizashi (short sword)", "damage": "1d6", "tradeGoods": "3 vials of ink"},
		{"occupation": "Kitsune painter", "race": "Kitsune", "trainedWeapon": "Staff", "damage": "1d4", "tradeGoods": "Set of paint brushes"},
		{"occupation": "Kitsune silk merchant", "race": "Kitsune", "trainedWeapon": "Staff", "damage": "1d4", "tradeGoods": "Kimono"}
		];
		return occupations[Math.floor(Math.random() * 10)]; 
}
	  
