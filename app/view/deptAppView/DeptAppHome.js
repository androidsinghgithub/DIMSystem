Ext.define('Dept.view.deptAppView.DeptAppHome',{
	
	extend: 'Ext.form.Panel',
	alias: 'widget.deptAppHome',
	xtype:	'deptAppHome',
	
	config: {
		baseCls:'deptAppHome',
		
		 items: [ 
		          {
	           xtype:'toolbar',
	           title : 'DeptHomeScreen',
	           docked:'top',
//	           items:[{
//	        	   xtype : 'button',
//	        	   text : 'Back',
//	        	   iconCls:'arrow_left',
//	        	   itemId : 'dptHomeBckbtnId', 
//	        	   
//	           },
//	           
//	           ]
	           },
		       {
		    	   xtype: 'button',
		    	   text: 'Add',
		    	   itemId:'dptHomeAddBtnId',
		    	   cls:'dptHomeAddCls'
		    		   
		       },
		       {
		    	   xtype: 'button',
		    	   text: 'Search',
		    	   itemId:'dptHomeSearchBtnId',
		    	   cls:'dptHomeSearchCls'
		       },
		       
		      
	
	]}
	



});