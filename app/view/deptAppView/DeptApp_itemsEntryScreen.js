//DeptApp_itemsEntryScreen.js

Ext.define('Dept.view.deptAppView.DeptApp_itemsEntryScreen',{
	
	extend: 'Ext.form.Panel',
	alias: 'widget.deptApp_itemsEntryScreen',
	xtype:	'DeptApp_itemsEntryScreen',
	
	config: {
		baseCls:'DeptApp_itemsEntryScreen',
		
		 items: [ 
		          {
	           xtype:'toolbar',
	           title : 'ItemsEntryScreen',
	           docked:'top',
	           items:[{
	        	   xtype : 'button',
	        	   text : 'ClearFields',
	        	   itemId : 'dptItemEntryScreenClearfieldsbtnId', 
	        	   
	           },
	           
	        	  
	           
	           {
	        	   xtype : 'button',
	        	   text : 'Home',
	        	   //iconCls:'home',
	        	   itemId : 'dptItemEntryScreenHomebtnId', 
	        	   
	           },
	           
	           ]
	           },
	          
	           {
		    	   xtype: 'textfield',
		    	   placeHolder: 'brand',
		    	   itemId:'brandTextFieldId',
		    	   name:'brandTextField',
		    	   cls:'brandTextFieldCls'
		       },
		       {
		    	   xtype: 'textfield',
		    	   placeHolder: 'itemName',
		    	   itemId:'itemNameTextFieldId',
		    	   name:'itemNameTextFieldId',
		    	   cls:'itemNameTextFieldId'
		       },
		       {
		    	   xtype: 'textfield',
		    	   placeHolder: 'size',
		    	   itemId:'sizeTextFieldId',
		    	   name:'sizeTextField',
		    	   cls:'sizeTextFieldCls'
		       },
		       {
		    	   xtype: 'textfield',
		    	   placeHolder: 'color',
		    	   itemId:'colorTextField',
		    	   name:'colorTextField',
		    	   cls:'colorTextFieldCls'
		       },
		       {
		    	   xtype: 'textfield',
		    	   placeHolder: 'sex',
		    	   itemId:'sexTextField',
		    	   name:'sexTextField',
		    	   cls:'sexTextFieldCls'
		       },
		       {
		    	   xtype: 'textfield',
		    	   placeHolder: 'noOfItem',
		    	   itemId:'noOfItemTextField',
		    	   name:'noOfItemTextField',
		    	   cls:'noOfItemTextFieldCls'
		       },
		       {
		    	   xtype: 'button',
		    	   text: 'Submit',
		    	   itemId:'dptItemEntryScreenSubmitBtnId',
		    	   cls:'dptItemEntryScreenSubmitBtnIdCls'
		    		   
		       }
		       
		      
	
	]}
	



});