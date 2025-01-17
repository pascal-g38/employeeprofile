sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension"
    ], (ControllerExtension) => {
	"use strict";
    
        return ControllerExtension.extend("employeeprofile.controller.SkillSectionExtend", {
        _sectionPrefix: "fe::CustomSubSection::SkillSection--",
        override: {   
            onInit() { 
                this.getView().byId(this._sectionPrefix + "gridListId");
            }
           }      
          });
        });  
    