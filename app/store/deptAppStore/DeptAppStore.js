Ext.define('Dept.store.deptAppStore.DeptAppStore',{
	extend: 'Ext.data.Store',
	alias: 'widget.deptAppStore',
	   config:{
	   storeId:'deptAppStore_ID',
	   
	  model: 'Dept.model.deptAppModel.DeptAppModel', 
		
		 
	  autoLoad: true,
//	     
//	  data: [
//	       
//	         {brand:"MyBrand", itemName: 'Topi',  size: 'M', color: 'Blue',   sex: 'Male',  noOfItems: 21 },
//	         {brand:"MyBrandName", itemName: 'Topiwala',  size: 'M', color: 'Blue',   sex: 'feMale',  noOfItems: 22   },]
//	   
	   }
	
});
