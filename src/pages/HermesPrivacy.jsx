import HermesPage from "../components/HermesPage";

const HermesPrivacy = () => (
    <HermesPage
        title="Hermes privacy policy"
        description="How Joseph-Vu Trinh’s private Hermes email integration handles Google account data."
    >
        <p className="text-sm">Effective October 16, 2026</p>
        <section>
            <h2>Who operates this integration</h2>
            <p>
                Joseph-Vu Trinh operates this integration on a personal Mac for his
                own Gmail accounts. This policy covers the Hermes email assistant
                described on this website, rather than unrelated portfolio features
                or other installations of Hermes Agent. There is no public signup.
            </p>
        </section>
        <section>
            <h2>Data accessed and its purpose</h2>
            <p>
                With Google OAuth consent, the integration requests Gmail read-only
                access. It reads message bodies, snippets, sender and recipient
                information, subjects, dates, labels, and message identifiers. This
                data is used to search and summarize mail, recognize important new
                messages, identify relevant actions or deadlines, and avoid duplicate alerts.
            </p>
            <p>
                This authorization does not permit sending, modifying, or deleting
                Gmail messages. Google account passwords are not collected by this
                integration; sign-in and consent take place with Google.
            </p>
        </section>
        <section>
            <h2>Processing and sharing</h2>
            <p>
                Gmail is accessed through Google’s API. Email content needed for
                importance detection or a requested inbox task may be sent to the
                configured AI provider, currently OpenAI, for processing. That
                processing is subject to the provider’s terms, privacy policy,
                and the account’s data settings; the assistant does not run entirely offline.
            </p>
            <p>
                Important-email alerts include the account label, sender, subject,
                and a short summary or action. These are sent to my configured
                iMessage conversation through the messaging connector and Apple’s
                messaging service. Email data is not published on this website.
            </p>
            <p>
                Data is shared only as needed to provide the requested assistant
                and notification features. It is not sold, used for advertising,
                or used by this integration to train general-purpose AI models.
                This integration’s use and transfer of information received from
                Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>,
                including its Limited Use requirements.
            </p>
        </section>
        <section>
            <h2>Storage, protection, and retention</h2>
            <p>
                Google authorization tokens are stored locally in restricted-access
                files on my Mac, separately for each account. The Gmail connection
                uses HTTPS. Tokens and credentials are not included in this website
                or its public source code.
            </p>
            <p>
                Local monitoring files store pending email content and processing
                state. Handled messages leave the pending queue; processed identifiers
                are retained for approximately seven days to prevent duplicates.
                Email content and summaries may also remain in local assistant
                sessions, logs, backups, and iMessage history until those records
                are deleted. AI and messaging providers may retain data under
                their own policies and account settings.
            </p>
        </section>
        <section>
            <h2>Stopping access and deleting data</h2>
            <p>
                Access can be revoked at any time through <a href="https://myaccount.google.com/connections">Google Account connections</a>.
                Revoking access prevents further authorized Gmail access but does
                not automatically delete previously stored records or delivered alerts.
            </p>
            <p>
                I can pause the email monitor, remove its local tokens and monitoring
                data, and delete local assistant records and iMessage alerts. Data
                held by external providers must be managed through their account
                controls. Contact me for privacy questions or deletion requests at <a href="mailto:josephvutrinh.work@gmail.com">josephvutrinh.work@gmail.com</a>.
            </p>
        </section>
        <section>
            <h2>Policy changes</h2>
            <p>
                This policy will be updated if the integration’s data practices
                change. Any broader Google permissions or new uses of Google data
                require disclosure and consent before they are enabled.
            </p>
        </section>
    </HermesPage>
);

export default HermesPrivacy;
