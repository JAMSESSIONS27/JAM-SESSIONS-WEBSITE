# Reminders before publishing or merging

These reminders summarize legal, tax, privacy, and operational checks you should complete before making the donation pages public or merging to main.

1. Legal & tax review
- Have your accountant or legal counsel review all public-facing tax and receipt wording, including EIN 42-2364325 and the public charity status 170(b)(1)(A)(vi).
- Confirm any state-level charitable registration and solicitation requirements where JAM SESSIONS solicits donations.

2. Donation receipt process
- Confirm the official process for providing donor receipts (automated processor receipts vs. JAM SESSIONS-signed receipts for large or in-kind gifts).
- Define who in the organization issues signed receipts and where signed copies are stored.
- For in-kind donations: have a policy for acknowledgement letters vs. valuation guidance for donors; do not assign FMV in the acknowledgement.

3. Payment processing & PCI
- Use hosted payment pages (Stripe Checkout, PayPal hosted buttons, GiveLively) to minimize PCI scope.
- Confirm your payment provider account details and test live transactions in sandbox before going public.
- Ensure webhook endpoints (if any) validate signatures from the processor and do not leak secrets in logs.

4. Privacy & data retention
- Have legal counsel review the draft PRIVACY_POLICY.md and confirm the retention period (currently 7 years).
- Ensure minimal storage of donor personal data; do not store full card data on your servers.
- Provide processes for donors to request access, correction, or deletion where applicable.

5. Operations & bookkeeping
- Decide how donation records will be imported to your accounting system and who is responsible for reconciliation.
- Maintain copies of donation confirmations and signed receipts for tax and audit purposes.

6. Accessibility & UX
- Run automated accessibility checks (axe-core, Lighthouse) and perform manual keyboard and screen reader testing on donation flow pages.
- Ensure donate button and hosted checkout pages are keyboard accessible and screen-reader friendly.

7. Communications & opt-ins
- Add a clear opt-in for marketing/communications on donation forms if you plan to email donors, and record consent where required by law.
- Provide an unsubscribe method and honor opt-out requests promptly.

8. Testing & staging
- Test the full donation flow (sandbox mode) end-to-end: form, processor redirect, webhook, receipt generation, accounting entry.
- Test edge cases: failed payments, partial refunds, recurring gift cancellations.

9. Update repository links
- Replace placeholder links in DONATIONS.md and FUNDING.yml with your real payment links before publishing.

10. Review and publish
- After legal/accounting sign-off, merge nonprofit/add-donations to main or open a PR for review and get internal approvals.

If you want, I can:
- Update the placeholder payment links for you if you provide the live URLs.
- Open the PR from nonprofit/add-donations into main and include the reminders in the PR description.
- Add an HTML/CSS donate button snippet or a CI job to run accessibility checks.

Tell me which of those follow-ups you want me to take next.