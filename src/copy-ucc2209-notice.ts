import { Clipboard, showHUD } from "@raycast/api";

export default async function Command() {
  const notice = `STATUTORY NOTICE OF SCOPE VARIANCE (UCC § 2-209 COMPLIANCE):
Please note that the newly requested specifications fall outside our agreed Master Statement of Work. Under Uniform Commercial Code § 2-209 principles, all additional deliverables require formal bilateral written authorization. To safeguard your project milestone timeline and ensure transparent delivery, these items have been logged into our ScopeLock system for written change order authorization prior to deployment.`;

  await Clipboard.copy(notice);
  await showHUD("✅ ScopeLock UCC § 2-209 Notice Copied to Clipboard!");
}
