import React, { useState } from "react";
import { Form, ActionPanel, Action, showToast, Toast, Clipboard } from "@raycast/api";

export default function Command() {
  const [client, setClient] = useState("Client Enterprise LLC");
  const [project, setProject] = useState("Q4 Platform Migration");
  const [agreementDate, setAgreementDate] = useState("2026-09-01");
  const [scopeAdditions, setScopeAdditions] = useState("1. Real-time Slack sync integration\n2. Role-based RBAC permissions matrix\n3. Biometric passkey authentication support");
  const [additionalHours, setAdditionalHours] = useState("18");
  const [additionalFee, setAdditionalFee] = useState("2250");
  const [deliveryExtension, setDeliveryExtension] = useState("10 business days");

  async function handleCopyNotice() {
    const today = new Date().toISOString().split("T")[0];
    const notice = `FORMAL CHANGE ORDER NOTICE
PURSUANT TO UCC § 2-209 & EXCLUSIVE WRITTEN MODIFICATION PROTOCOL

Date: ${today}
Client: ${client}
Project: ${project}
Master Agreement Reference Date: ${agreementDate}

1. SCOPE EXPANSION SUMMARY:
The following requested work constitutes a material variance beyond the signed Statement of Work (SOW):
${scopeAdditions}

2. COMMERCIAL ADJUSTMENTS:
• Additional Billable Hours: ${additionalHours} hrs
• Additional Commercial Consideration: $${additionalFee} USD
• Baseline Schedule Extension: ${deliveryExtension}

3. STATUTORY NOTICE & CONDITION PRECEDENT:
Pursuant to Uniform Commercial Code § 2-209 and bilateral commercial contract covenants, work on the above out-of-scope items remains paused until this written Change Order is counter-signed or explicitly authorized via written confirmation.

Authorized by Contractor / Agency: _________________________
Client Acceptance Signature:        _________________________

Generated via ScopeLock AI (https://ahirwardhanmanti83-bit.github.io/scopelock-ai/)`;

    await Clipboard.copy(notice);
    await showToast({
      style: Toast.Style.Success,
      title: "Change Order Copied!",
      message: "Formal legal notice ready to send to client via email or Slack",
    });
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm title="Copy Formal Change Order" onSubmit={handleCopyNotice} />
          <Action.OpenInBrowser
            title="Open ScopeLock Portal"
            url="https://ahirwardhanmanti83-bit.github.io/scopelock-ai/"
          />
        </ActionPanel>
      }
    >
      <Form.Description
        title="Legal Change Order Notice"
        text="Generates statutory UCC § 2-209 formal change order amendment to pause out-of-scope work until authorized."
      />
      <Form.TextField id="client" title="Client / Organization" value={client} onChange={setClient} />
      <Form.TextField id="project" title="Project Name" value={project} onChange={setProject} />
      <Form.TextField id="agreementDate" title="SOW / Contract Date" value={agreementDate} onChange={setAgreementDate} />
      <Form.TextArea id="scopeAdditions" title="Out-of-Scope Items" value={scopeAdditions} onChange={setScopeAdditions} />
      <Form.TextField id="additionalHours" title="Additional Hours" value={additionalHours} onChange={setAdditionalHours} />
      <Form.TextField id="additionalFee" title="Additional Fee ($ USD)" value={additionalFee} onChange={setAdditionalFee} />
      <Form.TextField id="deliveryExtension" title="Timeline Extension" value={deliveryExtension} onChange={setDeliveryExtension} />
    </Form>
  );
}
