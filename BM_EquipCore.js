//=============================================================================
// Blackmorning Engine Plugins - Equip Core
// BM_EquipCore.js
//=============================================================================

var Imported = Imported || {};
Imported.BM_EquipCore = true;

var BM = BM || {};
//=============================================================================
 /*:
 * @plugindesc VK Visual Equipment Scene (v1.00) 
 * Equipment body & icons setup
 * @author Blackmorning
 *
 * @param ---General---
 * @default
 *
 * @param WindowAlign
 * @desc Location of the command window. 
 * left     right
 * @default right
 *
 * @param HideEquipItemList
 * @desc Hide or show item list until selecting. 
 * Show - false     Hide - true
 * @default true
 *
 * @param HelpEquip
 * @desc The text for the command Equip.
 * @default Manually equip items
 *
 * @param HelpOptimize
 * @desc The text for the command Optimize.
 * @default Automatically equip the best items
 *
 * @param HelpRemove
 * @desc The text for the command Remove.
 * @default Unequip all items
 *
 * @param ---Slot Window---
 * @default
 *
 * @param EquipmentType
 * @desc Use icons or slot names. 
 * icons     names
 * @default names
 *
 * @param EquipmentIcons
 * @desc The icons for each equipment slot. 
 * Separate the icon ID's by a space.
 * @default 97 128 130 135 145
 *
 * @param ---Status Window---
 * @default
 *
 * @param EquipParameters
 * @desc Parameters shown when comparing equipment. 
 * Separate parameters by a space. * see help * 
 * @default mhp atk def mat mdf agi luk hit cri
 *
 * @param ParametersFontSize
 * @desc Font size of parameters.
 * @default 28
 *
 * @param BodyInStatus
 * @desc Let the body image show behind parameters. 
 * Show - true     Hide - false
 * @default false
 *
 * @param ComparePlusIcon
 * @desc Choose icon to show positive stat changes. 
 * default - leave blank to show none.
 * @default
 *
 * @param CompareMinusIcon
 * @desc Choose icon to show negative stat changes. 
 * default - leave blank to show none.
 * @default
 *
 * @param ---Body Window---
 * @default
 *
 * @param BodyWindowWidth
 * @desc Width of the Equip Body window. 
 * default 400
 * @default 400
 *
 * @param BodyImage
 * @desc Default image of the body. (found in Img\Pictures)
 * @default equip_m
 *
 * @param BodyPadding
 * @desc Adjusts the padding of the body window so image can go right to window frame.
 * @default 10
 *
 * @param EquipmentFramed
 * @desc The icons are framed. 
 * Show - true     Hide - false
 * @default true
 *
 * @param ScaleEquipIcons
 * @desc Scaling/multiplier of size of item icons on body. 
 * (based on default icon size)
 * @default 1
 *
 * @param IconXLocation
 * @desc Gives the default x-location of each icon. 
 * Separate the x by a space.  
 * @default 60 160 108 108 40 40
 *
 * @param IconYLocation
 * @desc Gives the default y-location of each icon. 
 * Separate the y by a space.
 * @default 330 330 60 220 100 220
 *
 * @param ---Parameters Vocab---
 * @default
 *
 * @param MhpVocab
 * @desc Vocab for maxHp 
 * default - leave blank to use the database's entry.
 * @default Hit Points
 *
 * @param MmpVocab
 * @desc Vocab for maxMp 
 * default - leave blank to use the database's entry.
 * @default 
 *
 * @param AtkVocab
 * @desc Vocab for atk 
 * default - leave blank to use the database's entry.
 * @default 
 *
 * @param DefVocab
 * @desc Vocab for def 
 * default - leave blank to use the database's entry.
 * @default 
 *
 * @param MatVocab
 * @desc Vocab for mat 
 * default - leave blank to use the database's entry.
 * @default 
 *
 * @param MdfVocab
 * @desc Vocab for mdf 
 * default - leave blank to use the database's entry.
 * @default 
 *
 * @param AgiVocab
 * @desc Vocab for agi 
 * default - leave blank to use the database's entry.
 * @default 
 *
 * @param LukVocab
 * @desc Vocab for luk 
 * default - leave blank to use the database's entry.
 * @default 
 *
 * @param HitVocab
 * @desc Vocab for hit 
 * default - leave blank to use the database's entry.
 * @default 
 *
 * @param EvaVocab
 * @desc Vocab for eva 
 * default - leave blank to use the database's entry.
 * @default 
 *
 * @param CriVocab
 * @desc Vocab for cri 
 * default Critical Rate 
 * @default Critical Rate   
 *
 * @param CevVocab
 * @desc Vocab for cev
 * default Crit Evasion
 * @default Crit Evasion
 *
 * @param MevVocab
 * @desc Vocab for mev 
 * default Magic Evasion
 * @default Magic Evasion
 *
 * @param MrfVocab
 * @desc Vocab for mrf
 * default M. Reflection
 * @default M. Reflection
 *
 * @param CntVocab
 * @desc Vocab for cnt 
 * default Counterattack 
 * @default Counterattack
 *
 * @param HrgVocab
 * @desc Vocab for hrg
 * default HP Regen Rate
 * @default HP Regen Rate
 *
 * @param MrgVocab
 * @desc Vocab for mrg
 * default MP Regen Rate
 * @default MP Regen Rate
 *
 * @param TrgVocab
 * @desc Vocab for trg
 * default TP Regen Rate
 * @default TP Regen Rate
 *
 * @param TgrVocab
 * @desc Vocab for trg
 * default Target Rate
 * @default Target Rate
 *
 * @param GrdVocab
 * @desc Vocab for grd
 * default Guard Effect
 * @default Guard Effect
 *
 * @param RecVocab
 * @desc Vocab for rec
 * default Recovery Effect
 * @default Recovery Effect
 *
 * @param PhaVocab
 * @desc Vocab for pha
 * default Pharmacology
 * @default Pharmacology
 *
 * @param McrVocab
 * @desc Vocab for mcr
 * default MP Cost Rate
 * @default MP Cost Rate
 *
 * @param TcrVocab
 * @desc Vocab for tcr 
 * default TP Cost Rate
 * @default TP Cost Rate
 *
 * @param PdrVocab
 * @desc Vocab for pdr 
 * default Phys Damage %
 * @default Phys Damage %
 *
 * @param MdrVocab
 * @desc Vocab for mdr
 * default Magic Damage %
 * @default Magic Damage %
 *
 * @param FdrVocab
 * @desc Vocab for fdr
 * default Floor Damage %
 * @default Floor Damage %
 *
 * @param ExrVocab
 * @desc Vocab for exr
 * default Exp Gain Rate
 * @default Exp Gain Rate
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 * Title: BM VK Equipment Scene
 * Author: Blackmorning
 * Version: 1.00
 * Website: http://bmscripts.weebly.com/vk-equip.html
 * Visual Equip Scene such as in "Valkyrie Stories" made for RPG Maker VX by 
 * Hanzo Kimura
 * - Icons can be assigned to equipment slots
 * - Visual placement of equipment onto an image
 * - Image can be assigned to actors/classes in the Database Notebox 
 *   (actors take priority)
 * - Window padding can be adjusted to eliminate cutoff of images.
 *   Text is still placed properly.
 * - Image can be assigned to weapon/armor in the Database Notebox
 * - Equipment icon positions can be assigned/changed to match new images
 * - Decide what parameters to show/compare (using symbols in table below)
 * - Decide what parameters are called
 *
 * Table of built-in parameters:
 *
 * ============================
 * | Symbol |      Name       |
 * ============================
 * | mhp    | Max HP          |
 * | mmp    | Max MP          |
 * | atk    | Attack          |
 * | def    | Defense         |
 * | mat    | M.Attack        |
 * | mdf    | M.Defense       |
 * | agi    | Agility         |
 * | luk    | Luck            |
 * =======================================
 * | hit    | Hit Rate        | percent  |
 * | eva    | Evasion         | percent  |
 * | cri    | Critical Rate   | percent  |
 * | cev    | Crit Evasion    | percent  |
 * | mev    | Magic Evasion   | percent  |
 * | mrf    | M. Reflection   | percent  |
 * | cnt    | Counterattack   | percent  |
 * | hrg    | HP Regen Rate   | percent  |
 * | mrg    | MP Regen Rate   | percent  |
 * | trg    | TP Regen Rate   | percent  |
 * =======================================
 * | tgr    | Target Rate     | percent  |
 * | grd    | Guard Effect    | percent  |
 * | rec    | Recovery Effect | percent  |
 * | pha    | Pharmacology    | percent  |
 * | mcr    | MP Cost Rate    | percent  |
 * | tcr    | TP Cost Rate    | percent  |
 * | pdr    | Phys Damage %   | percent  |
 * | mdr    | Magic Damage %  | percent  |
 * | fdr    | Floor Damage %  | percent  |
 * | exr    | Exp Gain Rate   | percent  |
 * =======================================
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * You can use the following notetags to change a actor/class's equipment setup.
 *-------------------------
 * Actor/Class Notetags:
 *-------------------------
 * <ebodyimage: x> 
 * - x must be the corresponding filename from the Img\Pictures folder. 
 *
 * For those who purchased the "Cover Art Characters Pack" and copied the data
 * into their projects, <Portrait: Package1_1> would be a good example use.
 *
 * <ebodyscale: x> - Specifies the desired scaling of the body image.
 * x = 1 provides the default scaling behavior; x = 0.5 halve the size, while
 * x = 2 doubles it.  Note that the image is confined to within the body image 
 * window.
 *
 * If not provided, the scaling factor will default to 1 and use the original
 * image size.
 *
 * <ebodyoffset: -x, -y>
 * <ebodyoffset: +x, +y>
 * - Specifies an offset from the default positioning to use for the body image.  
 *   Positive x moves the image further right, negative x moves left.
 *   Positive y moves the image further down, negative y moves up. 
 *   Note: the image may be clipped as a result of such adjustments.
 *   The equip window's border will automatically overwrite such parts of the
 *   image.
 *
 * <eiconid: x, y> with id as the equipment slot, x, y are the position.
 * This changes the actor's slot positions to wherever is listed. 
 * An actor's custom equip slots will take priority over a class's
 * custom equip slots, which will take priority over the default equip slots.
 *-------------------------
 * Weapon/Armor Notetags:
 *-------------------------
 *   <eiconimage: string>
 * - Uses a picture from Img\Pictures\ of your RPG Maker MV Project's
 * directory with the filename of "string" (without the extension) as the image
 * picture.  Will adjust to size of box.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.00: 2014-Nov-24
 * - Finished plugin!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================
BM.Parameters = PluginManager.parameters('BM_EquipCore');
BM.Equip = BM.Equip || {};
BM.Icon = BM.Icon || {};
BM.Vocab = BM.Vocab || {};

BM.Equip.EWindowAlign = String(BM.Parameters['WindowAlign'] || 'right');
BM.Equip.EBodyWidth = Number(BM.Parameters['BodyWindowWidth'] || 400);
BM.Equip.EHideList = BM.Parameters['HideEquipItemList'] == "true" ? true : false;
BM.Equip.EHelpEquip = String(BM.Parameters['HelpEquip']);
BM.Equip.EHelpOptimize = String(BM.Parameters['HelpOptimize']);
BM.Equip.EHelpRemove = String(BM.Parameters['HelpRemove']);
BM.Equip.EParamFontSize = Number(BM.Parameters['ParametersFontSize']);
BM.Equip.EBodyPadding = Number(BM.Parameters['BodyPadding'] || 18);
BM.Equip.EBodyStatus = BM.Parameters['BodyInStatus'] == "true" ? true : false;

BM.Equip.EBodyDefault = String(BM.Parameters['BodyImage']);
BM.Equip.EBodyIconScales = Number(BM.Parameters['ScaleEquipIcons'] || 1);
BM.Equip.ENameIcon = String(BM.Parameters['EquipmentType'] || 'names');
BM.Equip.EIconFramed = BM.Parameters['EquipmentFramed'] == "true" ? true : false;

BM.Icon.Plus = Number(BM.Parameters['ComparePlusIcon']);
BM.Icon.Minus = Number(BM.Parameters['CompareMinusIcon']);

BM.Data = String(BM.Parameters['EquipmentIcons']);
BM.Data = BM.Data.split(' ');
BM.Icon.EquipIcons = [];
for (BM.i = 0; BM.i < BM.Data.length; ++BM.i) {
  BM.Icon.EquipIcons.push(parseInt(BM.Data[BM.i]));
};

BM.Data = String(BM.Parameters['IconXLocation']);
BM.Data = BM.Data.split(' ');
BM.Equip.EIconXLocations = [];
for (BM.i = 0; BM.i < BM.Data.length; ++BM.i) {
  BM.Equip.EIconXLocations.push(parseInt(BM.Data[BM.i]));
};
BM.Data = String(BM.Parameters['IconYLocation']);
BM.Data = BM.Data.split(' ');
BM.Equip.EIconYLocations = [];
for (BM.i = 0; BM.i < BM.Data.length; ++BM.i) {
  BM.Equip.EIconYLocations.push(parseInt(BM.Data[BM.i]));
};
BM.Data = String(BM.Parameters['EquipParameters']);
BM.Data = BM.Data.split(' ');
BM.Equip.EParameters = [];
for (BM.i = 0; BM.i < BM.Data.length; ++BM.i) {
  BM.Equip.EParameters.push(BM.Data[BM.i]);
};
BM.Vocab.ParamNames = [];
BM.Vocab.ParamNames['mhp'] = String(BM.Parameters['MhpVocab']);
BM.Vocab.ParamNames['mmp'] = String(BM.Parameters['MmpVocab']);
BM.Vocab.ParamNames['atk'] = String(BM.Parameters['AtkVocab']);
BM.Vocab.ParamNames['def'] = String(BM.Parameters['DefVocab']);
BM.Vocab.ParamNames['mat'] = String(BM.Parameters['MatVocab']);
BM.Vocab.ParamNames['mdf'] = String(BM.Parameters['MdfVocab']);
BM.Vocab.ParamNames['agi'] = String(BM.Parameters['AgiVocab']);
BM.Vocab.ParamNames['luk'] = String(BM.Parameters['LukVocab']);
BM.Vocab.ParamNames['hit'] = String(BM.Parameters['HitVocab']);
BM.Vocab.ParamNames['eva'] = String(BM.Parameters['EvaVocab']);
BM.Vocab.ParamNames['cri'] = String(BM.Parameters['CriVocab']);
BM.Vocab.ParamNames['cev'] = String(BM.Parameters['CevVocab']);
BM.Vocab.ParamNames['mev'] = String(BM.Parameters['MevVocab']);
BM.Vocab.ParamNames['mrf'] = String(BM.Parameters['MrfVocab']);
BM.Vocab.ParamNames['cnt'] = String(BM.Parameters['CntVocab']);
BM.Vocab.ParamNames['hrg'] = String(BM.Parameters['HrgVocab']);
BM.Vocab.ParamNames['mrg'] = String(BM.Parameters['MrgVocab']);
BM.Vocab.ParamNames['trg'] = String(BM.Parameters['TrgVocab']);
BM.Vocab.ParamNames['tgr'] = String(BM.Parameters['TgrVocab']);
BM.Vocab.ParamNames['grd'] = String(BM.Parameters['GrdVocab']);
BM.Vocab.ParamNames['rec'] = String(BM.Parameters['RecVocab']);
BM.Vocab.ParamNames['pha'] = String(BM.Parameters['PhaVocab']);
BM.Vocab.ParamNames['mcr'] = String(BM.Parameters['McrVocab']);
BM.Vocab.ParamNames['tcr'] = String(BM.Parameters['TcrVocab']); 
BM.Vocab.ParamNames['pdr'] = String(BM.Parameters['PdrVocab']);
BM.Vocab.ParamNames['mdr'] = String(BM.Parameters['MdrVocab']);
BM.Vocab.ParamNames['fdr'] = String(BM.Parameters['FdrVocab']);
BM.Vocab.ParamNames['exr'] = String(BM.Parameters['ExrVocab']);
//-----------------------------------------------------------------------------
TextManager.paramName = function(paramName) {
	name = BM.Vocab.ParamNames[paramName]
	if(!name || name == '') {
		switch(paramName){
			case 'mhp':
			return $dataSystem.terms.params[0] || '';
			case 'mmp':
			return $dataSystem.terms.params[1] || '';
			case 'atk':
			return $dataSystem.terms.params[2] || '';
			case 'def':
			return $dataSystem.terms.params[3] || '';
			case 'mat': 
			return $dataSystem.terms.params[4] || '';
			case 'mdf':
			return $dataSystem.terms.params[5] || '';
			case 'agi':
			return $dataSystem.terms.params[6] || '';
			case 'luk':
			return $dataSystem.terms.params[7] || '';
			case 'hit':
			return $dataSystem.terms.params[8] || '';
			case 'eva':
			return $dataSystem.terms.params[9] || '';
		}
	}
	return name
};
//-----------------------------------------------------------------------------
BM.Equip.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!BM.Equip.DataManager_isDatabaseLoaded.call(this)) return false;
	this.processActorNotetagsEquipBM($dataActors);
	this.processClassNotetagsEquipBM($dataClasses);
	this.processWeaponNotetagsEquipBM($dataWeapons);
	this.processArmorNotetagsEquipBM($dataArmors);
	return true;
};
DataManager.processActorNotetagsEquipBM = function(group) {
	BM.Equip.EBodyAImages = [];
	BM.Equip.EBodyAImageOffsets = [];
	BM.Equip.EBodyAImageScales = [];
	BM.Equip.EBodyAIconX = [];
	BM.Equip.EBodyAIconY = [];
	BM.Equip.EBodyAImage = [];
	var offsetMatcher = /<(?:EBODYOFFSET):[ ]*([\+\-\s*]\d+)\s*,\s*([\+\-\s*]\d+)>/i;
	var iconoffsetMatcher = /<(?:EICON-)(\d+):[ ]*(\d+)\s*,\s*(\d+)>/i;
	for (var n = 1; n < group.length; n++) {
		BM.Equip.EBodyAImageScales[n] = 1;		
		BM.Equip.EBodyAImageOffsets[n] = [0, 0];
		BM.Equip.EBodyAImages[n] = BM.Equip.EBodyDefault
		BM.Equip.EBodyAIconX[n] = [];
		BM.Equip.EBodyAIconY[n] = [];
		BM.Equip.EBodyAImage[n] = false
		var obj = group[n];
		var notedata = obj.note.split(/\r?\n/);
		for (var i = 0; i < notedata.length; i++) {			
			var line = notedata[i];
			if (line.match(/<(?:EBODYIMAGE):[ ]([\w\s]+)>/i)) {
				var eBody = RegExp.$1;
				BM.Equip.EBodyAImage[n] = true;
				if (eBody == '')eBody = undefined;	
				else //;					
				BM.Equip.EBodyAImages[n] = eBody;
			} else if (line.match(/<(?:EBODYSCALE):[ ](\d+.?\d+)>/i)) {
				var eBodyScale = parseFloat(RegExp.$1);
				if (eBodyScale < 0) eBodyScale = 0;				
				BM.Equip.EBodyAImageScales[n] = eBodyScale;
			} else if (line.match(offsetMatcher)) {
				BM.Equip.EBodyAImageOffsets[n] = [parseInt(RegExp.$1), parseInt(RegExp.$2)];
			} else if (line.match(iconoffsetMatcher)) {	
				BM.Equip.EBodyAIconX[n][parseInt(RegExp.$1)] = parseInt(RegExp.$2);
				BM.Equip.EBodyAIconY[n][parseInt(RegExp.$1)] = parseInt(RegExp.$3);
			} 
		}	
		ImageManager.loadPicture(BM.Equip.EBodyAImages[n]);
	}
};
DataManager.processClassNotetagsEquipBM = function(group) {
	BM.Equip.EBodyCImages = [];
	BM.Equip.EBodyCImageOffsets = [];
	BM.Equip.EBodyCImageScales = [];
	BM.Equip.EBodyCIconX = [];
	BM.Equip.EBodyCIconY = [];
	var offsetMatcher = /<(?:EBODYOFFSET):[ ]*([\+\-\s*]\d+)\s*,\s*([\+\-\s*]\d+)>/i;
	var iconoffsetMatcher = /<(?:EICON-)(\d+):[ ]*(\d+)\s*,\s*(\d+)>/i;
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		BM.Equip.EBodyCImageScales[n] = 1;		
		BM.Equip.EBodyCImageOffsets[n] = [0, 0];
		BM.Equip.EBodyCImages[n] = BM.Equip.EBodyDefault
		BM.Equip.EBodyCIconX[n] = [];
		BM.Equip.EBodyCIconY[n] = [];
		var notedata = obj.note.split(/\r?\n/);
		for (var i = 0; i < notedata.length; i++) {			
			var line = notedata[i];
			if (line.match(/<(?:EBODYIMAGE):[ ]([\w\s]+)>/i)) {
				var eBody = RegExp.$1;
				if (eBody == '') eBody = undefined;				
				BM.Equip.EBodyCImages[n] = eBody;
			} else if (line.match(/<(?:EBODYSCALE):[ ](\d+.?\d+)>/i)) {
				var eBodyScale = parseFloat(RegExp.$1);
				if (eBodyScale < 0) eBodyScale = 0;				
				BM.Equip.EBodyCImageScales[n] = eBodyScale;
			} else if (line.match(offsetMatcher)) {
				BM.Equip.EBodyCImageOffsets[n] = [parseInt(RegExp.$1), parseInt(RegExp.$2)];
			} else if (line.match(iconoffsetMatcher)) {	
				BM.Equip.EBodyCIconX[n][parseInt(RegExp.$1)] = parseInt(RegExp.$2);
				BM.Equip.EBodyCIconY[n][parseInt(RegExp.$1)] = parseInt(RegExp.$3);
			} 
		}	
		ImageManager.loadPicture(BM.Equip.EBodyCImages[n]);
	}
};
DataManager.processWeaponNotetagsEquipBM = function(group) {
	BM.Equip.EBodyIconWImages = [];
	BM.Equip.EIconWImage = [];
	for (var n = 1; n < group.length; n++) {
		BM.Equip.EIconWImage[n] = false
		var obj = group[n];
		obj.eBodyIconImages = [];
		var notedata = obj.note.split(/\r?\n/);
		for (var i = 0; i < notedata.length; i++) {			
			var line = notedata[i];
			if (line.match(/<(?:EICONIMAGE):[ ]([\w\s]+)>/i)) {
				var eBody = RegExp.$1;
				BM.Equip.EIconWImage[n] = true;
				if (eBody == '')eBody = undefined;	
				else //;					
				BM.Equip.EBodyIconWImages[n] = eBody;
				obj.eBodyIconImages = eBody;
			} 
		}		
		ImageManager.loadPicture(BM.Equip.EBodyIconWImages[n]);
	}
};
DataManager.processArmorNotetagsEquipBM = function(group) {
	BM.Equip.EBodyIconAImages = [];
	BM.Equip.EIconAImage = [];
	for (var n = 1; n < group.length; n++) {
		BM.Equip.EIconAImage[n] = false
		var obj = group[n];
		var notedata = obj.note.split(/\r?\n/);
		for (var i = 0; i < notedata.length; i++) {			
			var line = notedata[i];
			if (line.match(/<(?:EICONIMAGE):[ ]([\w\s]+)>/i)) {
				var eBody = RegExp.$1;
				BM.Equip.EIconAImage[n] = true;
				if (eBody == '')eBody = undefined;	
				else;					
				BM.Equip.EBodyIconAImages[n] = eBody;
				obj.eBodyIconImages = eBody;
				
			} 
		}	
		ImageManager.loadPicture(BM.Equip.EBodyIconAImages[n]);
	}
};
//-----------------------------------------------------------------------------
// Window_Base
//-----------------------------------------------------------------------------
Window_Base.prototype.drawDarkRect = function(dx, dy, dw, dh) {
    var color = this.gaugeBackColor();    
    this.changePaintOpacity(false);    
    this.contents.fillRect(dx + 1, dy + 1, dw - 2, dh - 2, color);    
    this.changePaintOpacity(true);
};
Window_Base.prototype.drawFramedBox = function(dx, dy, dw, dh) {
    var color1 = this.gaugeBackColor();  
	var	color2 = this.normalColor();
	this.contents.fillRect(dx, dy, dw, dh, color2);	   
	this.contents.clearRect(dx + 1, dy + 1, dw - 2, dh - 2)
};
Window_Base.prototype.textLineHeight = function() {
	return (this.contents.fontSize + 12)
};
Window_Base.prototype.drawActorEBody = function(x, y, width, height) {
	if (BM.Equip.EBodyAImage[this._actor._actorId]) {
		var name = BM.Equip.EBodyAImages[this._actor._actorId]
		var scale = BM.Equip.EBodyAImageScales[this._actor._actorId];
		var offsets = BM.Equip.EBodyAImageOffsets[this._actor._actorId];
	} else {
		var name = BM.Equip.EBodyCImages[this._actor._actorId]		
		var scale = BM.Equip.EBodyCImageScales[this._actor._actorId];
		var offsets = BM.Equip.EBodyCImageOffsets[this._actor._actorId];
	}	
	var bitmap = ImageManager.loadPicture(name);
	var sw = bitmap.width;
    var sh = bitmap.height;
    this.contents.blt(bitmap, 0, 0, sw, sh,  // Image, top-left (x,y) from source image, source width + height to use
	x + offsets[0], y + offsets[1], // destination (x, y) to use.  Of note - anything past contentsWidth() + contentsHeight() is auto-clipped!
	Math.floor(sw * scale), Math.floor(sh * scale)); // destination width, height - can be used to scale!
};
Window_Base.prototype.drawEIcon = function(item, x, y, width, height) {
    if (item) {
		var scale = 1
		var scale = BM.Equip.EBodyIconScales
		if (item.etypeId == 1) var name = BM.Equip.EBodyIconWImages;
		else var name = BM.Equip.EBodyIconAImages;
		if (name[item.id]){
			this.drawEIconImage(name[item.id], x, y, width*scale, height*scale);
		}else{
			this.drawIcon(item.iconIndex, x, y, width*scale, height*scale);
		}			
    }
};
Window_Base.prototype.drawEIconImage = function(name, x, y,width, height) {
	var bitmap = ImageManager.loadPicture(name);
	var pw = bitmap.width;
	var ph = bitmap.height;
	var sx = 0;
	var sy = 0;   
    this.contents.blt(bitmap, sx, sy, pw, ph, x, y, width, height);
};
Window_Base.prototype.drawIcon = function(iconIndex, x, y, width, height) {
	width = width || Window_Base._iconWidth;
    height = height || Window_Base._iconHeight;
	var bitmap = ImageManager.loadSystem('IconSet');
	var pw = Window_Base._iconWidth;
	var ph = Window_Base._iconHeight;
	var sx = iconIndex % 16 * pw;
	var sy = Math.floor(iconIndex / 16) * ph;  
    this.contents.blt(bitmap, sx, sy, pw, ph, x, y, width, height);
};
//-----------------------------------------------------------------------------
// Window_EquipBody
//
// The window for selecting an equipment slot on the equipment screen.
function Window_EquipBody() {
    this.initialize.apply(this, arguments);
}
Window_EquipBody.prototype = Object.create(Window_Selectable.prototype);
Window_EquipBody.prototype.constructor = Window_EquipBody;
Window_EquipBody.prototype.initialize = function(x, y) {
	var height = this.windowHeight();
	var width = this.windowWidth();
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._actor = null;
	this._slotId = -1
    this.refresh();
};
Window_EquipBody.prototype.windowHeight = function() {
    return (Graphics.boxHeight - this.fittingHeight(2));
};
Window_EquipBody.prototype.fittingHeight = function(numLines) {
    return numLines * this.lineHeight() + BM.Equip.Window_EquipBody_standardPadding() * 2;
};
Window_EquipBody.prototype.windowWidth = function() {
	return BM.Equip.EBodyWidth;
};
Window_EquipBody.prototype.setActor = function(actor) {
    if (this._actor !== actor) {
        this._actor = actor;
        this.refresh();
    }
};
Window_EquipBody.prototype.maxItems = function() {
    return this._actor ? this._actor.equipSlots().length : 0;
};
Window_EquipBody.prototype.item = function() {
    return this._actor ? this._actor.equips()[this.index()] : null;
};
Window_EquipBody.prototype.drawAllItems = function() {
	if (this._actor) {
		this.drawActorEBody(0, 0);
		this.drawActorName(this._actor, this.textPadding() + this.bmPadding(), this.bmPadding());
	}	
	Window_Selectable.prototype.drawAllItems.call(this)
};
Window_EquipBody.prototype.drawItem = function(index) {
    if (this._actor) {
        var rect = this.itemRect(index);
        this.changeTextColor(this.systemColor());
        this.changePaintOpacity(this.isEnabled(index));
		if (BM.Equip.EIconFramed){
			this.drawFramedBox(rect.x - 4,rect.y + this.contents.fontSize - 4, rect.width + 8, rect.height + 8);
		}
		this.makeFontSmaller();
        this.drawText(this.slotName(index), rect.x - 4, rect.y - 4, rect.width + 8, this.lineHeight(),'center');
		this.makeFontBigger();		
		this.drawEIcon(this._actor.equips()[index], rect.x, rect.y + this.contents.fontSize, Window_Base._iconWidth, Window_Base._iconHeight);
        this.changePaintOpacity(true);
    }
};
Window_EquipBody.prototype.itemRect = function(index) {
	var scale = BM.Equip.EBodyIconScales
	var xa = BM.Equip.EIconXLocations;
	var ya = BM.Equip.EIconYLocations;
	if (BM.Equip.EBodyAImage[this._actor._actorId]) {
		if (BM.Equip.EBodyAIconX[this._actor._actorId][index]) {
			var xa = BM.Equip.EBodyAIconX[this._actor._actorId];
			var ya = BM.Equip.EBodyAIconY[this._actor._actorId];
		};
	} else {
		if (BM.Equip.EBodyCIconX[this._actor._actorId][index]) {
			var xa = BM.Equip.EBodyCIconX[this._actor._actorId];
			var ya = BM.Equip.EBodyCIconY[this._actor._actorId];
		};
	}	
    var rect = new Rectangle();
    rect.width = Window_Base._iconWidth * scale;
    rect.height = Window_Base._iconHeight * scale;
    rect.x = xa[index]
    rect.y = ya[index]
    return rect;
};
Window_EquipBody.prototype.slotName = function(index) {
    var slots = this._actor.equipSlots();
    return this._actor ? $dataSystem.equipTypes[slots[index]] : '';
};
Window_EquipBody.prototype.isEnabled = function(index) {
    return this._actor ? this._actor.isEquipChangeOk(index) : false;
};
Window_EquipBody.prototype.isCurrentItemEnabled = function() {
    return this.isEnabled(this.index());
};
Window_EquipBody.prototype.setSlotId = function(slotId) {
    if (this._slotId !== slotId) {
        this._slotId = slotId;
        this.refresh();
		this.updateCursor();
    }
};
Window_EquipBody.prototype.update = function() {
	Window_Selectable.prototype.update.call(this);
	this.updateCursor();
}	
Window_EquipBody.prototype.updateCursor = function() {
    if (this._cursorAll) {
        var allRowsHeight = this.maxRows() * this.itemHeight();
        this.setCursorRect(0, 0, this.contents.width, allRowsHeight);
        this.setTopRow(0);
    } else if (this.isCursorVisible()) {
        var rect = this.itemRect(this._slotId);
        this.setCursorRect(rect.x - 2, rect.y - 2 + this.contents.fontSize, rect.width + 4, rect.height + 4);
    } else {
        this.setCursorRect(0, 0, 0, 0);
    }
};
BM.Equip.Window_EquipBody_standardPadding = Window_EquipBody.prototype.standardPadding;
Window_EquipBody.prototype.standardPadding = function() {
    return BM.Equip.EBodyPadding;
};
Window_EquipBody.prototype.bmPadding = function() {
	return BM.Equip.Window_EquipBody_standardPadding() - this.padding
};
//-----------------------------------------------------------------------------
// Window_EquipCommand
//
BM.Equip.Window_EquipCommand_updateHelp = Window_EquipCommand.prototype.updateHelp;
Window_EquipCommand.prototype.updateHelp = function() {
    BM.Equip.Window_EquipCommand_updateHelp.call(this);
	var array = [BM.Equip.EHelpEquip, BM.Equip.EHelpOptimize, BM.Equip.EHelpRemove]
	if (this._helpWindow) {
		this._helpWindow.setText(array[this.index()]);
	}
};
//-----------------------------------------------------------------------------
// Window_EquipStatus
//-----------------------------------------------------------------------------
BM.Equip.Window_EquipStatus_initialize = Window_EquipStatus.prototype.initialize;
Window_EquipStatus.prototype.initialize = function(x, y) {
	this._slotId = 0;
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this._actor = null;
	this._slotId = 0;
    this.refresh();
};
Window_EquipStatus.prototype.windowHeight = function() {
    return (Graphics.boxHeight - this.fittingHeight(2));
};
Window_EquipStatus.prototype.windowWidth = function() {
    return BM.Equip.EBodyWidth;
};
Window_EquipStatus.prototype.fittingHeight = function(numLines) {
    return numLines * this.lineHeight() + BM.Equip.Window_EquipStatus_standardPadding() * 2;
};
Window_EquipStatus.prototype.refresh = function() {
    this.contents.clear();
    if (this._actor) {
		if (BM.Equip.EBodyStatus) this.drawActorEBody(0, 0);		
        this.drawActorName(this._actor, this.textPadding() + this.bmPadding(), this.bmPadding());	
		this.drawCurrentWeapon(this.bmPadding(),this.lineHeight()+this.bmPadding())
		this.drawNewWeapon(Window_Base._iconWidth+this.bmPadding(),this.lineHeight()*5/2+this.bmPadding())
		this.contents.fontSize = BM.Equip.EParamFontSize
		var param = BM.Equip.EParameters
		var y = this.lineHeight() * 4 + this.bmPadding()
		var h = this.contents.height - y - this.bmPadding()
		var tf = h / this.textLineHeight();
		var pf = Math.floor(Math.min(tf,param.length));
		var dh = pf * this.textLineHeight();
		var dy = Math.floor((h - dh)/2 + this.bmPadding()/2);
		y = y + dy
		for (var i = 0; i < pf; i++) {
			this.drawItem(this.bmPadding(), y, param[i]);
			y += this.textLineHeight()
		}
		this.resetFontSettings();
    }
};
Window_EquipStatus.prototype.bmPadding = function() {
	return BM.Equip.Window_EquipStatus_standardPadding() - this.padding 
};
Window_EquipStatus.prototype.drawCurrentWeapon = function(x, y) {
	var dx = x + Window_Base._iconWidth
	var dy = y + this.lineHeight()/2;
    this.drawDarkRect(dx, dy, this.contents.width-dx-this.bmPadding()-Window_Base._iconWidth, this.lineHeight());
    var lastFontSize = this.contents.fontSize;
    this.makeFontSmaller()
    this.drawText("Current Item", x, y-10, this.contents.width-x-this.bmPadding()-Window_Base._iconWidth);
    this.makeFontBigger()  
	this.drawItemName(this._actor.equips()[this._slotId], dx, dy, this.contents.width-dx-this.bmPadding()-6-Window_Base._iconWidth);
};
Window_EquipStatus.prototype.drawNewWeapon = function(x, y) {
	var dx = x + Window_Base._iconWidth
	var dy = y + this.lineHeight()/2;
    this.drawDarkRect(dx, dy, this.contents.width-dx-this.bmPadding(), this.lineHeight());
    var lastFontSize = this.contents.fontSize;
    this.makeFontSmaller()
    this.drawText("To New Item", x, y-10, this.contents.width-x-this.bmPadding());
    this.makeFontBigger()
	if (this._tempActor) {
		this.drawItemName(this._tempActor.equips()[this._slotId], dx, dy, this.contents.width-dx-this.bmPadding()-6);
	}
};
Window_EquipStatus.prototype.drawItem = function(x, y, paramName) {
	this.drawDarkRect(x, y, this.contents.width-x-this.bmPadding(), this.textLineHeight());
	this.drawRightArrow(x + 188, y);
	var percent = true
	if (paramName){
		this.drawParamName(x + this.textPadding(), y, paramName);
		switch(paramName){
			case 'mhp':
			case 'mmp': 
			case 'atk':
			case 'def':
			case 'mat':
			case 'mdf':
			case 'agi':
			case 'luk':
			percent = false;
			break;
		}
		if (this._actor) {
			this.drawCurrentParam(x + 140, y, paramName, percent);
		}		
		if (this._tempActor) {
			this.drawNewParam(x + 222, y, paramName, percent);
		}
	}
};
Window_EquipStatus.prototype.drawParamName = function(x, y, paramName) {
    this.changeTextColor(this.systemColor());
	var name = TextManager.paramName(paramName)
    this.drawText(name, x, y, 120);
};
Window_EquipStatus.prototype.drawCurrentParam = function(x, y, paramName, percent) {
    this.resetTextColor();
	var value = eval("this._actor." + paramName, this);
	if (percent == true) {
		value = Math.round(value * 100) + "%";
	}
    this.drawText(value, x, y, 48, 'right');
};
Window_EquipStatus.prototype.drawNewParam = function(x, y, paramName, percent) {
	var oldValue = eval("this._actor." + paramName, this);
	var newValue = eval("this._tempActor." + paramName, this);
    var diffvalue = newValue - oldValue;
    this.changeTextColor(this.paramchangeTextColor(diffvalue));
	if (percent == true) {
		newValue = Math.round(newValue * 100) + "%";
	}
	if (diffvalue > 0 && BM.Icon.Plus && BM.Icon.Plus != 0){
		this.drawIcon(BM.Icon.Plus, this.contents.width - this.textWidth(newValue) - this.bmPadding()-Window_Base._iconWidth, y)
	}
	if (diffvalue < 0 && BM.Icon.Minus && BM.Icon.Minus != 0){
		this.drawIcon(BM.Icon.Minus, this.contents.width - this.textWidth(newValue) - this.bmPadding()-Window_Base._iconWidth, y)
	}
    this.drawText(newValue, x, y, this.contents.width - x - 6 - this.bmPadding(), 'right');
};
Window_EquipStatus.prototype.setSlotId = function(slotId) {
    if (this._slotId !== slotId) {
        this._slotId = slotId;
        this.refresh();
    }
};
BM.Equip.Window_EquipStatus_standardPadding = Window_EquipStatus.prototype.standardPadding;
Window_EquipStatus.prototype.standardPadding = function() {
    return BM.Equip.EBodyStatus ? BM.Equip.EBodyPadding : BM.Equip.Window_EquipStatus_standardPadding();
};
//-----------------------------------------------------------------------------
// Window_EquipSlot
//-----------------------------------------------------------------------------
BM.Equip.Window_EquipSlot_initialize = Window_EquipSlot.prototype.initialize;
Window_EquipSlot.prototype.initialize = function(x, y, width, height) {
	var height = this.windowHeight();
    BM.Equip.Window_EquipSlot_initialize.call(this, x, y, width, height);
};
Window_EquipSlot.prototype.windowHeight = function() {
	if (BM.Equip.EHideList) {
		return (Graphics.boxHeight - this.fittingHeight(2) - this.fittingHeight(1));
	} else {
		return this.fittingHeight(this.numVisibleRows());
	}		
};
Window_EquipSlot.prototype.setBodyWindow = function(bodyWindow) {
    this._bodyWindow = bodyWindow;
    this.callUpdateHelp();
};
Window_EquipSlot.prototype.numVisibleRows = function() {
    return (this._actor ? this._actor.equipSlots().length : $dataSystem.equipTypes.length) - 1;
};
BM.Equip.Window_EquipSlot_drawItem = Window_EquipSlot.prototype.drawItem;
Window_EquipSlot.prototype.drawItem = function(index) {
	if (BM.Equip.ENameIcon == 'names'){
		BM.Equip.Window_EquipSlot_drawItem.call(this, index);
	} else {
		if (this._actor) {
			var rect = this.itemRectForText(index);
			this.changeTextColor(this.systemColor());
			this.changePaintOpacity(this.isEnabled(index));
			this.drawEquipSlotIcon(index, rect.x, rect.y)
			var dx = rect.x + Window_Base._iconWidth + 10
			this.drawItemName(this._actor.equips()[index], dx, rect.y, this.contents.width - dx);
			this.changePaintOpacity(true);			
		}
	}
};
Window_EquipSlot.prototype.drawEquipSlotIcon = function(index, x, y){
	var eIcon = BM.Icon.EquipIcons;
	var equippedIcon = this._actor.equips()[index];
	this.drawIcon(eIcon[index], x, y);
}
BM.Equip.Window_EquipSlot_drawItemName = Window_EquipSlot.prototype.drawItemName;
Window_EquipSlot.prototype.drawItemName = function(item, x, y, width) {
	width = width || this.contents.width;
	BM.Equip.Window_EquipSlot_drawItemName.call(this, item, x, y, width - x);    
};
BM.Equip.Window_EquipSlot_updateHelp = Window_EquipSlot.prototype.updateHelp;
Window_EquipSlot.prototype.updateHelp = function() {
    BM.Equip.Window_EquipSlot_updateHelp.call(this);
    if (this._actor && this._bodyWindow) {
        this._bodyWindow.setSlotId(this.index());
    }
};

//-----------------------------------------------------------------------------
// Window_EquipItem
//-----------------------------------------------------------------------------
Window_EquipItem.prototype.maxCols = function() {
    return 1;
};
BM.Equip.Window_EquipItem_updateHelp = Window_EquipItem.prototype.updateHelp;
Window_EquipItem.prototype.updateHelp = function() {
    BM.Equip.Window_EquipItem_updateHelp.call(this);
    if (this._actor && this._statusWindow) {
        this._statusWindow.setSlotId(this._slotId);
    }
};

//-----------------------------------------------------------------------------
// Scene_Equip
//-----------------------------------------------------------------------------
BM.Equip.Scene_Equip_create = Scene_Equip.prototype.create;
Scene_Equip.prototype.create = function() {
	BM.Equip.Scene_Equip_create.call(this);
	this.relocateWindows();
}
Scene_Equip.prototype.relocateWindows = function() {
	if (BM.Equip.EWindowAlign != 'right') {
		this._commandWindow.x = 0;
		this._itemWindow.x = 0;
		this._slotWindow.x = 0;
		this._bodyWindow.x = this._commandWindow.width;
		this._statusWindow.x = this._commandWindow.width;		
	};
	if (BM.Equip.EHideList) {
		this._itemWindow.hide();
	};
}
BM.Equip.Scene_Equip_createStatusWindow = Scene_Equip.prototype.createStatusWindow;
Scene_Equip.prototype.createStatusWindow = function() {
    BM.Equip.Scene_Equip_createStatusWindow.call(this);
	this._statusWindow.hide();
};
Scene_Equip.prototype.createBodyWindow = function() {
    this._bodyWindow = new Window_EquipBody(0, this._helpWindow.height);
    this._slotWindow.setBodyWindow(this._bodyWindow);
	this.addWindow(this._bodyWindow);	
};
Scene_Equip.prototype.createSlotWindow = function() {
    var wx = this._statusWindow.width;
    var ww = Graphics.boxWidth - this._statusWindow.width;
	var wy = this._commandWindow.y + this._commandWindow.height;
	var wh = Graphics.boxHeight - wy
    this._slotWindow = new Window_EquipSlot(wx, wy, ww, wh);
    this._slotWindow.setHelpWindow(this._helpWindow);
    this._slotWindow.setStatusWindow(this._statusWindow);
    this._slotWindow.setHandler('ok',       this.onSlotOk.bind(this));
    this._slotWindow.setHandler('cancel',   this.onSlotCancel.bind(this));
    this.addWindow(this._slotWindow);
};
Scene_Equip.prototype.createItemWindow = function() {
    var wx = this._statusWindow.width;
	var ww = Graphics.boxWidth - this._statusWindow.width;
	var wy = this._slotWindow.y + this._slotWindow.height;    
	var wh = Graphics.boxHeight - wy;
	if (BM.Equip.EHideList) {
		var wy = this._commandWindow.y + this._commandWindow.height;
		var wh = Graphics.boxHeight - wy;		
	}
    this._itemWindow = new Window_EquipItem(wx, wy, ww, wh);
    this._itemWindow.setHelpWindow(this._helpWindow);
    this._itemWindow.setStatusWindow(this._statusWindow);
    this._itemWindow.setHandler('ok',     this.onItemOk.bind(this));
    this._itemWindow.setHandler('cancel', this.onItemCancel.bind(this));
    this._slotWindow.setItemWindow(this._itemWindow);
    this.addWindow(this._itemWindow);
	this.createBodyWindow();
};
BM.Equip.Scene_Equip_refreshActor = Scene_Equip.prototype.refreshActor;
Scene_Equip.prototype.refreshActor = function() {
	var actor = this.actor();
	BM.Equip.Scene_Equip_refreshActor.call(this);  
	this._bodyWindow.setActor(actor);
};
BM.Equip.Scene_Equip_commandEquip = Scene_Equip.prototype.commandEquip;
Scene_Equip.prototype.commandEquip = function() {
	BM.Equip.Scene_Equip_commandEquip.call(this);
    this._bodyWindow.activate();
	this._bodyWindow.select(0);
};
BM.Equip.Scene_Equip_onSlotOk = Scene_Equip.prototype.onSlotOk;
Scene_Equip.prototype.onSlotOk = function() {
    BM.Equip.Scene_Equip_onSlotOk.call(this);
	if (BM.Equip.EHideList) {
		this._itemWindow.show();
		this._slotWindow.hide();
	}
	this._statusWindow.show();
	this._bodyWindow.hide();
};
BM.Equip.Scene_Equip_onSlotCancel = Scene_Equip.prototype.onSlotCancel;
Scene_Equip.prototype.onSlotCancel = function() {
	BM.Equip.Scene_Equip_onSlotCancel.call(this);
	this._bodyWindow.deselect();
    this._bodyWindow.deactivate();
};
BM.Equip.Scene_Equip_onItemOk = Scene_Equip.prototype.onItemOk;
Scene_Equip.prototype.onItemOk = function() {
    BM.Equip.Scene_Equip_onItemOk.call(this);
	if (BM.Equip.EHideList) {
		this._itemWindow.hide();
		this._slotWindow.show();
	}
    this._statusWindow.hide();
	this._bodyWindow.show();
	this._bodyWindow.refresh();
};
BM.Equip.Scene_Equip_onItemCancel = Scene_Equip.prototype.onItemCancel;
Scene_Equip.prototype.onItemCancel = function() {
    BM.Equip.Scene_Equip_onItemCancel.call(this);
	if (BM.Equip.EHideList) {
		this._itemWindow.hide();
		this._slotWindow.show();
	}
    this._statusWindow.hide();
	this._bodyWindow.show();
};
BM.Equip.Scene_Equip_commandOptimize = Scene_Equip.prototype.commandOptimize;
Scene_Equip.prototype.commandOptimize = function() {
	BM.Equip.Scene_Equip_commandOptimize.call(this);
    this._bodyWindow.refresh();
};
BM.Equip.Scene_Equip_commandClear = Scene_Equip.prototype.commandClear;
Scene_Equip.prototype.commandClear = function() {
	BM.Equip.Scene_Equip_commandClear.call(this);
    this._bodyWindow.refresh();
};
