data = new Object();
data.brand = "brand";
data.itemName = "itemName";
data.size = "size";
data.color = "color";
data.sex = "sex";
data.noOfItems = "noOfItems";
var dept_Item = new Object();
var filter_item = new Object();
//'brand','itemName','size','color','sex','no Of Items

Ext.define('Dept.controller.deptAppController.DeptAppController',{
		extend : 'Ext.app.Controller',
		alias : 'widget.deptAppController',

		init : function() {
					controller = this;
					Ext.create('Dept.store.deptAppStore.DeptAppStore');
					},

				
	config : {

			refs : {
				deptAppListView : 'deptAppListView',
				deptAppPanelView:'deptAppPanelView',
				dptPanelBckBtnId: 'deptAppPanelView #dptPanelBckBtnId',
				dptPanelHomeBtnId:'deptAppPanelView #dptPanelHomeBtnId',
				dptPanelOkBtn:'deptAppPanelView #dptPanelOkBtn',
				dptHomeAddBtnId:'deptAppHome #dptHomeAddBtnId',
				dptHomeSearchBtnId:'deptAppHome #dptHomeSearchBtnId',
				dptItemEntryScreenClearfieldsbtnId:'deptApp_itemsEntryScreen #dptItemEntryScreenClearfieldsbtnId',
				dptItemEntryScreenHomebtnId:'deptApp_itemsEntryScreen #dptItemEntryScreenHomebtnId',
				brandTextFieldId:'DeptApp_itemsEntryScreen #brandTextFieldId',
				itemNameTextFieldId:'DeptApp_itemsEntryScreen #itemNameTextFieldId',
				sizeTextFieldId:'DeptApp_itemsEntryScreen #sizeTextFieldId',
				colorTextField:'DeptApp_itemsEntryScreen #colorTextField',
				sexTextField:'DeptApp_itemsEntryScreen #sexTextField',
				noOfItemTextField:'DeptApp_itemsEntryScreen #noOfItemTextField',
				dptItemEntryScreenSubmitBtnId:'DeptApp_itemsEntryScreen #dptItemEntryScreenSubmitBtnId',
				deptAppPanelView:'deptAppPanelView',
				deptAppHome:'deptAppHome',
				deptApp_itemsEntryScreen:'deptApp_itemsEntryScreen',
				deptApp_ClearItemsEntryScreenTextField:'deptApp_itemsEntryScreen',
				deptApp_ItemsSearch:'deptApp_ItemsSearch',
				dptItemSearchbtnId:'deptApp_ItemsSearch #dptItemSearchbtnId',
				searchValueTextFieldId:'deptApp_ItemsSearch #searchValueTextFieldId',
				dptItemSearchScreenselectField:'deptApp_ItemsSearch #dptItemSearchScreenselectField',
				dptItemSearchScreenBckbtnId:'deptApp_ItemsSearch #dptItemSearchScreenBckbtnId',
				dptItemSearchScreenHomebtnId:'deptApp_ItemsSearch #dptItemSearchScreenHomebtnId',
				searchValueTextFieldId:'deptApp_ItemsSearch #searchValueTextFieldId',
			},
			control : {
				deptAppListView :
				{
					initialize : 'activateStore',
				},
				dptPanelBckBtnId:
				{
					tap: 'goToDeptHomeScreen',
				},
				dptPanelHomeBtnId:
				{
					tap: 'goToDeptHomeScreen',
				},
				dptPanelOkBtn:
				{
					tap: 'goToDeptHomeScreen',
				},
				dptHomeAddBtnId:{
					tap:'goToDeptItemEntryScreen',
				},
				dptHomeSearchBtnId:
				{
					tap: 'goToDeptItemSearchScreen',
				},
				dptItemEntryScreenSubmitBtnId:
				{
					tap: 'saveDeptItemsIntoStoreUpdatePanel',
				},
				deptApp_itemsEntryScreen:
				{
					tap:'saveDeptItemsIntoStoreUpdatePanel',
				},
				dptItemEntryScreenClearfieldsbtnId:
				{
					tap:'clearItemsEntryScreenTextField',
				},
				dptItemSearchbtnId:
				{
					tap: 'searchItemFromStore',
				},
				dptItemSearchScreenHomebtnId:
				{
					tap: 'goToDeptHomeScreen',
				},
				dptItemSearchScreenBckbtnId:
				{
					tap: 'goToDeptHomeScreen',
				}
					
	},
			},
			
			activateStore: function()
			{
				alert(123);
				Ext.Ajax.request({
					url : 'resource/departmentalStoreData.json',
					method : 'GET',
					success : function(response) {

						var responsedata_dept =  JSON.parse(response.responseText);
						console.log(responsedata_dept.departmentalStoreAppModels);
						
										
						//StoreBucket
						var dept_store = Ext.getStore("deptAppStore_ID");
						dept_store.setData(responsedata_dept.departmentalStoreAppModels);
						console.log(dept_store.getCount());
						
				//var showDepartmentListView = Ext.create('DepartmentalStoreApp.view.departmentalStoreAppViews.DepartmentalStoreAppPanelAfterLaunch');
//						//var showDetails =Ext.create('PersonalDetails.view.personDetailsView.ThirdScreen');
				//Ext.Viewport.add(showDepartmentListView);
				//		Ext.Viewport.setActiveItem(showDepartmentListView);
					},
						
					failure : function(response) {
						//controller.getUserNameTextField().setValue("No response.... error");
						console.log("No response");
					}
				});
			},
			goToDeptHomeScreen:function()
			{
				var deptHomeScreen ;
				if(this.getDeptAppHome() === undefined){
				deptHomeScreen = Ext.create('Dept.view.deptAppView.DeptAppHome');
				Ext.Viewport.add(deptHomeScreen);
				}else{
					deptHomeScreen =this.getDeptAppHome();
				}
				Ext.Viewport.setActiveItem(deptHomeScreen);

			},
			// Clear the Textfield Data
			clearItemsEntryScreenTextField: function()
			{
				alert("clear textfield");
				this.getBrandTextFieldId().setValue('');
				this.getItemNameTextFieldId().setValue('');
				this.getSizeTextFieldId().setValue('');
				this.getColorTextField().setValue('');
				this.getSexTextField().setValue('');
				this.getNoOfItemTextField().setValue('');
			},
			
			
			// Home Add button Handler
			goToDeptItemEntryScreen: function()
			{
				alert("updated now");
				//Ext.getCmp('brandTextFieldId').setValue('New value for BB_ID field');
				var deptItemDetails_Entry ;
				if(this.getDeptApp_itemsEntryScreen() === undefined){
					deptItemDetails_Entry = Ext.create('Dept.view.deptAppView.DeptApp_itemsEntryScreen');
				Ext.Viewport.add(deptItemDetails_Entry);
				}
				else
				{
					deptItemDetails_Entry =this.getDeptApp_itemsEntryScreen();
				}
				Ext.Viewport.setActiveItem(deptItemDetails_Entry);

			},
			
			// Storing dept Item Entry Details into Store
			
			saveDeptItemsIntoStoreUpdatePanel : function() {
				//alert(3);
				//controller.
				var dept_Item = new Object();
				dept_Item.brand = controller.getBrandTextFieldId().getValue();
				//alert(dept_Item.brand);
				dept_Item.itemName = controller.getItemNameTextFieldId().getValue();
				dept_Item.size = controller.getSizeTextFieldId().getValue();
				dept_Item.color = controller.getColorTextField().getValue();
				dept_Item.sex = controller.getSexTextField().getValue();
				dept_Item.noOfItems = controller.getNoOfItemTextField().getValue();
				
				var deptItemEntry_Store = Ext.getStore("deptAppStore_ID");
				//console.log(deptItemEntry_Store.getCount());
				
				deptItemEntry_Store.add(dept_Item);
				//alert(deptItemEntry_Store);
				
				var update_DeptItemDetails;
				if(controller.getDeptAppPanelView()  === undefined){
					update_DeptItemDetails = Ext.create('Dept.view.deptAppView.DeptAppPanelView');
				Ext.Viewport.add(update_DeptItemDetails);
				}else{
					update_DeptItemDetails=controller.getDeptAppPanelView();
				}
				
				Ext.Viewport.setActiveItem(update_DeptItemDetails);
				
			},
			
			goToDeptItemSearchScreen:function()
			{
				alert('search');
				var deptItemDetails_Search ;
				if(this.getDeptApp_ItemsSearch() === undefined){
					deptItemDetails_Search = Ext.create('Dept.view.deptAppView.DeptApp_ItemsSearch');
				Ext.Viewport.add(deptItemDetails_Search);
				}
				else
				{
					deptItemDetails_Search =this.getDeptApp_ItemsSearch();
				}
				Ext.Viewport.setActiveItem(deptItemDetails_Search);
			},
			
			// filter logic
			searchItemFromStore:function()
			{
				alert("searching key value");
				var dept_filterStore = Ext.getStore("deptAppStore_ID");
				var filter_item= new Object();
				filter_item.searchValue = controller.getSearchValueTextFieldId().getValue();
				filter_item.chooseOne =  controller.getDptItemSearchScreenselectField().getValue();
				var searchValue =filter_item.searchValue;
				var chooseOneValue =filter_item.chooseOne;
				console.log(searchValue);
				console.log(chooseOneValue);
				//store.filter(brand, filter_item.searchValue);
				//store.filter(brand, filter_item.searchValue);
				dept_filterStore.clearFilter();
				dept_filterStore.filter(chooseOneValue,searchValue);
				var filtered_DeptItemDetails;
				if(controller.getDeptAppPanelView()  === undefined){
					filtered_DeptItemDetails = Ext.create('Dept.view.deptAppView.DeptAppPanelView');
				Ext.Viewport.add(filtered_DeptItemDetails);
				}else{
					filtered_DeptItemDetails=controller.getDeptAppPanelView();
				}
				
				Ext.Viewport.setActiveItem(filtered_DeptItemDetails);
			}
			
	});