import { Link } from "react-router-dom";
import HermesPage from "../components/HermesPage";

const Hermes = () => (
    <HermesPage
        title="Hermes email assistant"
        description="A private Gmail assistant that helps Joseph-Vu Trinh notice important email and respond on time."
    >
        <section>
            <h2>Important email, brought to my attention</h2>
            <p>
                I operate this personal integration using Hermes Agent on my own Mac.
                It checks my connected Gmail accounts for new mail, identifies messages
                that need attention, and sends me a short alert through iMessage.
                I can also ask it to search and summarize my inboxes.
            </p>
            <p>
                Alerts include recruiting and job application updates, interview
                invitations, decisions, deadlines, security alerts, and substantive
                messages that need a reply. Routine promotions and newsletters stay quiet.
            </p>
        </section>
        <section>
            <h2>Read-only Gmail access</h2>
            <p>
                Google authorization allows this integration to read email messages
                and settings. The integration uses message content, sender information,
                subjects, dates, and labels to provide inbox assistance and alerts.
                It does not send, delete, archive, or mark email as read.
            </p>
        </section>
        <section>
            <h2>For my own accounts</h2>
            <p>
                This setup is for my personal use. This website provides information
                about it; visitors cannot connect accounts or view my inbox here.
                This integration is operated by Joseph-Vu Trinh and is not an official
                Google product or the official Hermes Agent website.
            </p>
        </section>
        <section>
            <h2>Privacy and contact</h2>
            <p>
                The <Link to="/hermes/privacy">privacy policy</Link> explains how
                Google data is accessed, processed, stored, and shared for these features.
                For questions, contact <a href="mailto:josephvutrinh.work@gmail.com">josephvutrinh.work@gmail.com</a>.
            </p>
        </section>
    </HermesPage>
);

export default Hermes;
