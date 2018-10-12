<aura:application extends="force:slds" access="GLOBAL">
    <ltng:require styles="{!$Resource.SLDS261 + '/styles/salesforce-lightning-design-system.min.css'}" />

    <aura:handler name="cmpReqType" 
                    event="c:ServiceRequestEvent" 
                    action="{!c.handleComponentEvent}"/>
    

    <aura:attribute name="showTrust" type="boolean" />
    <aura:attribute name="showMoney" type="boolean" />

    
     
    <lightning:layout horizontalAlign="center">
        <lightning:layoutItem padding="around-small">
          <div class="slds">
                <c.RequestType  /> 
            <aura:if isTrue="{!v.showTrust}"> 
                <c.TrustInvestmentOnboarding /> 
            </aura:if>
            <aura:if isTrue="{!v.showMoney}">
                <c.MoneyMovement />
            </aura:if>
            <aura:if isTrue="{!v.showTrust || v.showMoney}">
                 <c.AdditionDetail />  
            </aura:if>        
        </div>  
        </lightning:layoutItem>
    </lightning:layout>
</aura:application>