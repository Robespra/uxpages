import React from 'react'
import {Helmet} from "react-helmet";
import PageTransition from 'gatsby-plugin-page-transitions'
import Header from '../components/header'
import Footer from '../components/footer'
let pathPrefix = `/`
export default () => (
<PageTransition>
<div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>uxpages - Terms & Conditions</title>
      <link rel="canonical" href="https://uxpages.com" />
    </Helmet>
    <Header/>

    {/* begin terms */}
    <div className="row align-center padding5_bottom" id="content">
        <div className="small-11 medium-8 column">
            <h1 className="padding10_top padding5_bottom">Terms of service</h1>
            <p>Latest update: Feb 25, 2021.</p>
            <p>
            This agreement is entered between uxpages, a company registered in Paris, hereinafter referred to as “uxpages” or "Contractor" and the payer or/and the recipient of services hereunder identified as part of the process for uxpages services, hereinafter referred to as “You”, “Customer” or "Client".</p>
            <p>Please understand that by accepting these terms and conditions, Customer represents and warrants that the Customer is major and thus legally capable to enter into contract and in case Customer is acting on behalf of some business entity, Customer is duly authorized to enter into agreement on behalf of the entity Customer is representing. Customer also represents and warrants that the Customer is not a competitor of uxpages.
            </p>
            <h3>1. DEFINITIONS</h3>
            <p>As used herein and throughout this Agreement:</p>
            <p>1.1 “Agreement” means the entire content of this document, the Proposal document(s) (if any),
            together with any other Supplement, Exhibits, or additional
            Schedules as may be attached hereto and incorporated herein by reference.</p>
            <p>1.2 “Client Content” means all materials, information, photography, writings and other creative
            content provided by Client for use in the preparation of and/or incorporation in the Deliverables.
            </p><p>1.3 “Copyrights” means the property rights in original works of authorship, expressed in a tangible
            medium of expression, as defined and enforceable under France Copyright Law.</p>
            <p>1.4 “Deliverables” means the services and work product, as mutually agreed upon by Client and
            Designer, to be delivered by Designer to Client, in the form and media specified and agreed in contract.</p>
            <p>1.5 “Designer Tools” means all design tools developed and/or utilized by Designer in performing
            the Services, including, without limitation, pre-existing and newly developed software including
            source code, Web authoring tools, type fonts, and application tools, together with any other
            software, or other inventions (whether or not patentable), and general non-copyrightable concepts
            such as website design, architecture, layout, navigational and functional elements.</p>
            <p>1.6 “Final Art” means all creative content developed or created by Designer, or commissioned by
            Designer, exclusively for the Project and incorporated into and delivered as part of the Final
            Deliverables, including, but not limited to, any and all visual designs, visual elements, graphic
            design, illustration, photography, animation, sounds, typographic treatments and text, modifications
            to Client Content, and Designer’s selection, arrangement and coordination of such elements
            together with Client Content and/or Third Party Materials, and as approved and accepted by
            Client.</p>
            <p>1.7 “Final Deliverables” means the final versions of Deliverables (code or presentation) provided by Designer and
            approved and accepted by Client.</p>
            <p>1.8 “Preliminary Works” means all artwork including, but not limited to, concepts, wireframes (low-fi and high-fi), sketches, visual
            presentations, or other alternate or preliminary designs and documents, developed by Designer and
            which may or may not be shown and or delivered to Client for consideration.</p>
            <p>1.9 “Project” means the scope and purpose of Client’s identified usage of the work product.</p>
            <p>1.10 “Services” (or “Designer’s Services”) means all services and the work product to be provided to
            Client by Designer as described and otherwise further defined in the Deliverables.</p>
            <p>1.11 “Third Party Materials” means proprietary third party materials which are incorporated into
            the Final Deliverables, including, but not limited to, stock photography or stock illustrations.</p>
            <p>1.12 “Trademarks” means trade names, words, symbols, designs, logos or other devices or designs
            used to designate the origin or source of goods or services.</p>
            <h3>2. Scope of Service</h3>
            <p>We will create a master document outlining every functionality / funnels to be improved of your App. The contract will include
            one main design plus the opportunity for you to make up to two rounds of revisions. If you're not
            happy with the designs at this stage, you will pay us in full for all of the work that we have
            produced until that point and you may either cancel the contract or continue to commission us at
            an additional fee.</p>
            <p>We will also look at the visual design and branding of the App. If you would like us to create a visual identity for
            your company (logo, color scheme, font, stationary, business card design, etc.) or make design changes for a specific part we will do so at this stage. Doing so will increase the fees owed to uxpages by an amount we will agree upon
            should you choose to take this route.</p>

            <p>Consulting activities deliverables include the following: </p>
            <ul>
                <li>Generative research: Focus group/itw, Field study, Personas, User journey, Tasks flows, Competitive audit, Use cases, Value proposition, Moodboard</li>
                <li>Evaluative research: Usability studies, Heuristic review, Focus group/itw, Metrics analysis, Taxonomies, Quant/Qual UX research</li>
                <li>Design governance,</li>
                <li>Project plans, product roadmap or any planification activity including deliverables inside the scope of User Interface design,</li>
                <li>Design system, </li>
                <li>Full branding assets,</li>
                <li>User Flows, </li>
                <li>Sketching, </li>
                <li>Wireflows (user flows + wireframes), </li>
                <li>Interface inventory/component library, </li>
                <li>Project follow-up, </li>
                <li>Front-end integration, </li>
                <li>Peer code review, </li>
                <li>PET Checklist, </li>
                <li>Front-end Checklist, </li>
                <li>Affordance Analysis, </li>
                <li>Quick Wins to Reach Your KPIs, </li>
                <li>User Testing Guides, </li>
                <li>Conversion Checklist, </li>
                <li>Form Analysis,</li>
                <li>Responsive Report,</li>
                <li>Funnel Definition, </li>
                <li>Optimization Plan, </li>
                <li>Heuristic Evaluation, </li>
                <li>SWOT Analysis, </li>
                <li>Competitive audit, </li>
                <li>a/b Test Setup, </li>
                <li>Field Study & User Interview, </li>
                <li>Behaviour Analysis, </li>
                <li>Cognitive Ergonomics, </li>
                <li>UX Value Proposition, </li>
                <li>Product Strategy, </li>
                <li>Concept Testing,</li>
                <li>Guerrilla, Lab or Remote testing</li>
                <li>Copy and translations</li>
                <li>Accessibility improvement</li>
                <li>Performance budget</li>
            </ul>

            <p>What we won’t do :</p>
            <ul>
                <li>Any documentation or specification outside the scope of User Experience & User Interface design</li>
                <li>Any QA or testing activity outside the scope of User Interface Design</li>
                <li>Animations or video creation</li>
                <li>JavaScript for poly-fills and behaviours for browsers,</li>
                <li>Print graphic design,</li>
                <li>Stock pictures/videos or any asset required from a third-party provider,</li>
                <li>Project plans, product roadmap or any planification activity including deliverables outside the scope of User Interface design,</li>
                <li>non-UX KPI setup</li>
                <li>Staffing activities</li>
                <li>Maintenance activities</li>
            </ul>

            <p>uxpages offers services (the Service) which includes the following:</p>
            <p>2.1 Consulting. We deliver UI review (from a front-end and usability perspective and from a conversion rate perspective) and analytics reports. Consulting activities deliverables include the following : PET Checklist, Front-end Checklist, Affordance Analysis, Quick Wins to Reach Your KPIs, User Testing Guides, Conversion Checklist, Form Analysis, Responsive Report, Funnel Definition, Optimization Plan, Heuristic Evaluation, SWOT Analysis, UI Benchmark, a/b Test Setup, Field Study &amp; User Interview, Behaviour Analysis, Cognitive Ergonomics, UX Value Proposition, Product Strategy &amp; Concept Testing, Fully Coded Prototype, Inputs from Industry Experts, Predictive Analysis. Logistics costs for user interview or testing sessions (including uxpages consultants travel expenses) will be charged to the customer</p>
            <p> 2.1 HTML, CSS and Javascript. We deliver templates (Fully Coded Prototype or final optimized design) developed from HTML5 markup, CSS3 stylesheets for styling and Javascript for poly-fills and behaviours.</p>
            <p>2.3 a/b testing. We deliver a/b testing in PHP or RoR languages. Quick wins testing might be implemented using Google optimize tools. Please refer to our privacy policy for data details.</p>
            <p>2.4 Browser testing. Browser testing no longer means attempting to make a website look the same in browsers of
            different capabilities or on devices with different size screens. It does mean that uxpages will ensure that a user’s
            experience of a design should be appropriate to the capabilities of a browser or device.</p>
            <p>2.5 Desktop browser testing. uxpages test the work to be delivered in current versions of major desktop browsers including those made by Apple (Safari), Google (Chrome), Microsoft (Internet Explorer), Mozilla Firefox and Opera. We’ll also
            test to ensure Microsoft Internet Explorer 9 for Windows users get an appropriate, possibly
            different, experience. If you need an enhanced design for an older browser, we can provide a separate estimate for that.</p>
            <p>2.6 Mobile browser testing. Testing popular small-screen devices is essential in ensuring that a person’s experience of a design is appropriate to the capabilities of the device they’re using. We test our work in:
            iOS up to v6: Safari, Google Chrome and Opera Mini
            Android 5, 6, 7, 8 : Google Chrome, Firefox and Opera Mini. We currently don’t test Blackberry OS or Blackberry QNX, Opera Mobile, Symbian or other Android
            mobile browsers under v4. If you need us to test using these, we can provide a separate estimate for that.</p>
            <p>2.7 Technical support. uxpages is not a website hosting company but we will use OVH servers if we agree to implement integrated a/b testing on our servers. This setup will include Google Analytics and Google Optimize. Once the testing phase finalizes, the content will be removed and removal evidences will be provided to the customer. uxpages will offer Technical Support for this Service via OVH support desk. For any issue relating to the Service, Customer may contact uxpages’s technical support by sending an email to hola@uxpages.com. Only Customer or Customer’s authorized user may contact uxpages’s technical support. If the a/b testing or any improvement is hosted by client, uxpages will not provide any technical support related to hosting.</p>
            <h3>3. Out-of-scope and Change Orders</h3>
            <p>3.1 We know from experience that fixed-price contracts are rarely beneficial to you, as they often limit
            you to your earliest ideas. We don’t want to limit your ability to change your mind. The price at
            the beginning is based on the length of time we estimate we’ll need to accomplish
            everything you’ve told us you want to achieve, but we’re happy to be flexible. If you want to
            change your mind or add anything new, that won’t be a problem as we’ll provide a separate
            estimate for that.</p>
            <p>3.2 The prices at the beginning of this document are based on the number of days that we estimate
            we'll need to accomplish everything that you have told us you want to achieve. If you do want to
            change your mind, add extra pages or templates or even add new functionality, that won't be a
            problem. You will be charged according to the time it takes us to accommodate these changes. We
            will always make sure you are aware of these costs in writing before charging you. Along the way
            we might ask you to put requests in writing so we can keep track of changes. The Company, without invalidating this Agreement, may order changes in
            the work within the general scope of the Agreement consisting of additions, deletions, or other
            revisions.</p>
            <p>3.3 Adjustments to Compensation. In the event that any such changes materially impact the
            cost to the Contractor of performing the Services or the time required for such performance, the
            parties shall negotiate in good faith a reasonable and equitable adjustment in the applicable Fees and
            schedule, as applicable.</p>
            <h3>4. Beta Testing Program Terms &amp; Conditions</h3>
            <p>4.1 uxpages may from time to time make available to its Customers, several Beta Products or Services which are in the Beta phase. uxpages will clearly highlight Beta features/products in its Product or Service to clearly differentiate them from rest of the features. If Customer wishes to use such Beta Product or Service which is in the Beta phase, this clause will govern the use of such Product or Services.</p>
            <p>4.2 Subject to terms and conditions of this clause, uxpages grants Customer a non-exclusive, non-transferable license to use the Beta Product or Service for a period designated by uxpages for the purpose of testing and evaluation of such Beta Product or Service by providing uxpages with early feedback on the performance of Product or Beta Service, identification of any defects, reporting of any bugs, usability of Product or Service, and ideas for improvement of Beta Product or Service.</p>
            <p>4.3 By accepting these Beta Testing Program Terms &amp; Conditions, Customer hereby assigns to uxpages all rights, titles and interests in any feedback, ideas for improvement, and all intellectual property rights therein, including without limitation all patent, copyright, trade secret and trademark. Customer hereby acknowledges and understands that the Product or Services licensed hereunder is still in the testing phase and is provided on an “as is” and “as available” basis without a warranty of any kind, whether express or implied, including without limitation, the implied warranties of merchantability, non-infringement, accuracy, completeness, performance and fitness for a particular purpose. Notwithstanding anything to the contrary contained herein or elsewhere, in no event shall uxpages be liable for any damage whatsoever arising out of Customer’s use or inability to use Beta Product or Service, even if uxpages has been advised of the possibility of such damages. Customer hereby understands and accepts that any risk or damages arising out of the use or performance of the  Beta Product or Service will be Customer’s responsibility.</p>
            <p>4.4 It is hereby clarified that the Beta Product or Service may contain bugs, errors, omissions, and other problems, and uxpages will not provide any support and maintenance for its beta  Products or Services. The Beta Product or Service may not operate correctly and may be substantially modified prior to first commercial availability, or may be withdrawn at any time. Although uxpages will make best possible efforts to intimate users of  Beta Product or Service about any modification or termination of the  Beta Product or Service ahead of time, uxpages reserves the right to modify or terminate the  Beta Product or Service and Customer’s access to the  Beta Product or Service for any reason, without notice, at any time, and without any liability to Customer. Once the  Beta Product or Service is terminated, uxpages will not be obliged to provide continued access to data collected during the testing period after the beta is terminated. However, uxpages shall delete the data collected during the Beta phase upon receipt of a written request for deletion of such data by Customer.</p>
            <h3>5. Lawful use of the services</h3>
            <p>5.1 Customer hereby agrees to use the Services of uxpages only in an authorized manner as per the terms of this Agreement. In case it is found that Customer’s use of Services violates the terms of this Agreement or any other law, rule or regulation enacted by the concerned authorities from time to time, uxpages reserves the right to terminate the Agreement/Contract with immediate effect.</p>
            <p>5.2 uxpages's Responsibilities, Representations and Warranties in the performance of Services, uxpages agrees to: perform the Services to the best of its ability and with the degree of care, diligence and skill that a reasonably prudent person would exercise in comparable circumstances;
            liaise with Customer through Customer’s coordinator on matters related to the use of, and the identification and resolution of errors in the Service; however, this shall not include the provision of training services;
            invoice Customer according to the terms of this Agreement for the Services performed; and
            proceed according to Customer’s reasonable instructions for the disposition of Customer’s data and supplies on the termination of the Agreement.</p>
            <p>5.3 Customer's Responsibilities, Representations and Warranties : Client acknowledges that he shall be responsible for performing the following in a reasonable and timely manner : </p>
            <p>5.3 a. Coordination of any decision-making with parties other than uxpages;</p>
            <p>5.3 b. Provision of Client Content in a form suitable for reproduction or incorporation into the
            Deliverables without further preparation; and,</p>
            <p>5.3 c. Final proofreading pursuant to Provisions; provide all necessary data and any special forms or other required materials or information to uxpages on schedule or in a timely fashion to enable uxpages to provide the Services; ensure accuracy, legibility and completeness of all data supplied to uxpages and be solely responsible for the results obtained from Customer’s use of any of the Services;
            liaise with uxpages through a coordinator Customer will identify, on matters related to the Services, and authorize that coordinator to make decisions on behalf of Customer in relation to the implementation of this Agreement and the Services and any changes thereto; and
            control, and be responsible for the use of, account information, user ids and passwords related to the Services, where required</p>
            <p>5.4 Customer Representations: Customer represents and warrants to uxpages that: the information Customer has provided for the purpose of establishing an account with uxpages is accurate and
            Customer has complied with and will continue to comply with all applicable laws, including privacy laws, and has obtained and will continue to obtain the requisite privacy consents in the collection and use of all information that may be collected on any website or maintained on any server hosted by uxpages.</p>
            <h3>6. Fees, Billing, Taxes, Charges</h3>
            <p>6.1 Fees: The fees set forth in the order form created at the outset of Customer’s account shall be effective for the Initial Term and each renewal Term of this Agreement, provided that uxpages shall have the right to revise these fees at any time upon thirty (30) days’ written notice to Customer. In the event that Customer does not agree with such fee revision, Customer shall have the right to terminate the Agreement upon fifteen (15) days’ written notice, provided that such notice of termination must be received within thirty (30) days from the date of notice of fee increase.</p>
            <p>6.2 Billing and Payment Arrangements: uxpages will bill Customer on an annual/monthly/quarterly/half-yearly or any other mutually agreed period basis for all recurring fees. Invoices/payments are irrevocably deemed final and accepted by Customer unless disputed or sought clarification. Customer shall at all times provide and keep current and up‐to‐date Customer’s contact and billing information. Invoices shall be issued to Company by uxpages. a % of the
            project fee will be paid at the start of the project. An agreed fee will be paid upon
            successful completion of the project. The remaining payment shall be paid
            following final implementation of the project including any agreed upon training, documentation,
            debugging, app store submission, store approval and testing. All payments shall be due 30 business days after receipt of invoices.</p>
            <p>6.3 Payment by Credit Card/Wire Transfer/Cheque: Customer authorizes uxpages to charge the Customer credit card or bank account for all fees payable at the beginning of the Initial Subscription Term and all subsequent Billing Periods, including upgrades.</p>
            <p>6.4 Hourly Amount. The work performed by Contractor uxpages shall be performed at the agreed rate, and not exceed the total estimated amount specified in the contract sign between uxpages and the client</p>
            <p>6.5 Payment. Invoices shall be issued to Company by uxpages monthly after performance of
            the Work, and payment shall be due 30 business days after receipt ofinvoices.</p>
            <p>6.6 Project Amount. The work performed by Contractor shall be performed at the rate set and not exceed the total estimated amount specified in the contract sign between uxpages and the client.
            Additional hourly rate (if requested by the company for additional work or changes) might be added to the final invoice</p>
            <p>6.7 Taxes: Customer acknowledges that the all applicable taxes, duties or government levies whatsoever are not included in the fees and expenses charged under this Agreement. Customer will make timely payment of all such taxes, duties or government levies related to this Agreement. uxpages shall not be responsible for federal, state and local taxes derived from the
            uxpages net income or for the withholding and/or payment of any federal, state and local
            income and other payroll taxes, workers' compensation, disability benefits or other legal
            requirements applicable to Contractor.</p>
            <h3>7. Expenses</h3>
            <p>7.1 Payment. A Company shall reimburse uxpages for all pre-approved, reasonable and
            necessary expenses, including, without limitation, domestic and foreign travel, lodging and meal
            expenses incurred in connection with the Services. uxpages shall provide all relevant receipts</p>
            <p>7.2 Substantiation. The Contractor shall provide Company with documentation supporting all
            expenses.</p>
            <p>7.3 Payment. Company shall reimburse Contractor within 30 days upon
            receipt of a request for reimbursement from the Contractor.</p>
            <h3>8. Independent Contractor Status</h3>
            <p>8.1 Status. Contractor/uxpages is an independent contractor of your Company. Nothing contained in the
            Agreement shall be construed to create the relationship of employer and employee, principal and agent, partnership or joint venture, or any other fiduciary relationship.</p>
            <p>8.2  No Authority. Contractor/uxpages shall have no authority to act as agent for, or on behalf of,
            Company, or to represent Client Company, or bind Company in any manner.</p>
            <p>8.3 No Employee Benefits. Contractors/consultants working for uxpages shall not be entitled to worker's compensation,
            retirement, insurance or other benefits afforded to employees of Client Company.</p>
            <h3>9. Modification of Terms and Conditions</h3>
            <p>uxpages may update, amend, modify or supplement the terms and conditions of this Agreement from time to time and will use reasonable efforts to notify Customer regarding the same. Customer is responsible for regularly reviewing the most current version of this Agreement at any time at https://uxpages.com/terms. If at any time Customer does not agree with any amendment, modification or supplement to the terms and conditions of this Agreement, Customer may terminate this Agreement for convenience, as per Clause 7 mentioned aforesaid. Customer’s continued use of Customer’s account and/or the services after the notice period will be conclusively deemed to be acceptance by Customer of any such modifications or amendment.</p>
            <h3>10. Limited Warranty: Limitation of Damages</h3>
            <p>10. 1. uxpages provides the Service “as is”. Customer expressly agrees that use of the Service is at Customer’s sole risk. uxpages and its subsidiaries, affiliates, officers, employees, agents, partners, vendors and licensors expressly disclaim all warranties of any kind, whether express or implied, including, but not limited to the implied warranties of merchantability, fitness for a particular purpose and non-infringement. Customer hereby agrees that the terms of this Agreement shall not be altered due to custom or usage or due to the parties’ course of dealing or course of performance under this Agreement.</p>
            <p>10. 2. uxpages and its subsidiaries, affiliates, officers, employees, agents, partners, vendors and licensors shall not be liable for any indirect, incidental, special, punitive or consequential damages, including but not limited to damages for lost profits, business interruption, loss of programs or information, and the like, that result from the use or inability to use the Service or from mistakes, omissions, interruptions, deletion of files or directories, errors, defects, delays in operation, or transmission, regardless of whether uxpages has been advised of such damages or their possibility.
            Customer is fully responsible for the content of the information and data passing through uxpages's network or using the Services and for all activities that Customer conducts with the assistance of the Services.
            Notwithstanding anything to the contrary contained in this Agreement, uxpages’s aggregate liability under or in connection with the Agreement, whether arising from contract, negligence or otherwise, shall in any event not exceed the amount paid by Customer under the Agreement in the preceding 12 months.</p>
            <p>10. 3. Financial responsibility of optimization implementation: uxpages will perform the Services to the best of its ability in order to make customer's digital product make more profits. However uxpages will not be responsible of any financial loss related to the implementation of the optimized design.</p>
            <p>10. 4. Reasonable attempts to correct errors on notice: uxpages warrants that it will, at its expense, make commercially reasonable attempts to correct any errors for which uxpages is directly and solely responsible, provided that the data necessary to correct such errors is available to uxpages; or at uxpages’s discretion, provide Service credit to Customer equivalent to the charge that would have been applicable for correcting the portion of the Service that is an error; such Service credit will be only for errors solely due to malfunctioning of a functionality/product/a-b test  provided by uxpages or any error made by uxpages’s personnel during the performance of the Service. For uxpages to correct the errors or obtain the Service credit, Customer must notify uxpages in writing of such errors within 30 days of receipt of the Services believed to contain the errors.</p>
            <h3>11. Intellectual Property Rights</h3>
            <p>11.1 Ownership of Intellectual Property Rights: all Intellectual Property Rights, including any Software, App or Website owned by a party, its licensors or subcontractors as on the effective date of this Agreement shall continue to be owned by such party, its licensors or subcontractors and, except as expressly provided in this Agreement, the other party shall not acquire any right, title or interest in or to such Intellectual Property Rights. uxpages shall own all rights, titles and interests in and to any materials created or developed by uxpages or its subcontractors for its internal use or for assisting Customer in the provision of the Services; and Customer shall own all rights, titles and interests in and to any Intellectual Property Rights resulting or based on any work product created or developed exclusively for Customer under this Agreement, if fully paid for by Customer.</p>
            <p>11.2 Right to use logo: Customer agrees to let uxpages use its organization's logo in uxpages’s customer list and at other places on its website (including but not limited to uxpages.com and convy.io).</p>
            <p>11.3 Right to use limited project information: uxpages retains the right to reproduce, publish and display the Final Deliverables and testing results in Designer’s, Developer's or business owner's portfolios and websites, and in galleries, design periodicals and other media or exhibits for the sole purposes of recognition of creative excellence or professional advancement, and to be credited with
            authorship of the Final Deliverables in connection with such uses. Either Party, subject to the
            other’s written approval, may include a link to the other Party’s website.</p>
            <p>11.4 License of Customer Software and Intellectual Property: Customer agrees to grant to uxpages, solely for uxpages’s provision of the Services, access to any tool or application used by Customer and required by uxpages in order to troubleshoot and perform its Services, license during the Term to use any Intellectual Property Rights, including any Software, owned by or licensed to Customer by third parties and that is necessary for providing the Services to Customer and otherwise, performing its obligations under this Agreement. With respect to any Intellectual Property Rights and Software used by uxpages to provide the Services, Customer represents and warrants that: (a) Customer is either the owner of such Intellectual Property Rights or Software or is authorized by its owner to include it under this Agreement; and (b) uxpages has the right during the Term to use such Intellectual Property Rights and Software for the purpose of providing the Services to Customer as contemplated by this Agreement.</p>
            <p>11.5 Work Product. During the course of performing the Services, uxpages and its directors,
            officers, employees, or other representatives may, independently or in conjunction with Company,
            develop information, produce work product, or achieve other results for Company in connection
            with the Services it performs for Company.</p>
            <p>11.6 Ownership. uxpages agrees that such information, work product, and other results, systems
            and information developed by Contractor and/or Company in connection with such Services
            (hereinafter referred to collectively as the "Work Product") shall, to the extent permitted by law, be
            a "work made for hire" within the definition of French Copyright Act,
            and shall remain the sole and exclusive property of Company.</p>
            <p>11.7 Assignment of Interest. To the extent any Work Product is not deemed to be a work made
            for hire within the definition of the Copyright Act, uxpages with effect from creation of any
            and all Work Product, hereby assigns, and agrees to assign, to Company all right, title and interest
            in and to such Work Product, including but not limited to copyright, all rights subsumed
            thereunder, and all other intellectual property rights, including all extensions and renewals thereof.</p>
            <p>11.8 Moral Rights. Contractor also agrees to waive any and all moral rights relating to the Work
            Product, including but not limited to, any and all rights of identification of authorship and any and
            all rights of approval, restriction or limitation on use, and subsequent modifications.</p>
            <p>11.9 Assistance. Contractor further agrees to provide all assistance reasonably requested by
            Company, both during and subsequent to the Term of this Agreement, in the establishment,
            preservation and enforcement of Company's rights in the Work Product.</p>
            <p>11.10 Return of Property. Upon the termination of this Agreement, Contractor agrees to deliver
            promptly to Company all printed, electronic, audio-visual, and other tangible manifestations of the
            Work Product, including all originals and copies thereof.</p>
            <p>11.11 Client Content. Client Content, including all pre-existing Trademarks and copyright material,
            shall remain the sole property of Client, and Client shall be the sole owner of all rights in
            connection therewith. Client hereby grants to Designer a nonexclusive, nontransferable license to
            use, reproduce, and modify the Client Content solely in connection with Designer’s performance
            of the Designer’s Services and the production of the Deliverables.</p>
            <p>11.12 Third Party Materials. All Third Party Materials are the exclusive property of their respective
            owners. Designer shall inform Client of all Third Party Materials that may be required to
            perform the Design Services or otherwise integrated into the Final Art. Under such circumstances,
            Designer shall inform Client of any need to license.</p>
            <p>11.13 Assignment of Copyrights. Upon completion of the Services and conditioned upon full payment
            of all fees, costs and out-of-pocket expenses due, Designer shall assign to Client all ownership
            rights, including any copyrights, in and to any artworks or designs comprising the works created by
            Designer as part of the Final Art and Final Deliverables for use by Client. Designer shall cooperate
            with Client and shall execute any additional documents reasonably requested by Client to evidence
            all such assignments of intellectual property.</p>
            <p>11.14 Assignment of Final Art. Upon completion of the Design Services, and subject to full payment of
            all fees, costs and expenses due, Designer hereby assigns to Client all right, title and interest,
            including without limitation, copyright and other intellectual property rights, in and to the Final
            Deliverables and the Final Art. Designer agrees to reasonably cooperate with Client and shall
            execute any additional documents reasonably necessary to evidence such assignment.</p>
            <h3>12. Confidentiality</h3>
            <p>12. 1. uxpages will not use any of Customer’s Confidential Information except in connection with the performance of the Services or the exercise of its rights under this Agreement and will take all reasonable precautions to maintain the confidentiality of Customer’s Confidential Information and to prevent unauthorized disclosure to others of the Confidential Information. uxpages shall implement industry standard security procedures, such as appropriate firewall, encryption and access security measures to safeguard the Confidential Information.</p>
            <p>12. 2. uxpages shall only disclose the Confidential Information to those of its employees and permitted agents and subcontractors who have a need to know and require access to the Confidential Information as may be reasonably necessary in the exercise of uxpages’s rights and performance of the Services under this Agreement. Notwithstanding anything contrary in this Agreement, uxpages will not be required to keep confidential, and may use or license without restriction, any ideas, concepts, know-how or techniques related to information processing which are developed by uxpages in the performance of Services.</p>
            <p>12. 3. Notwithstanding the foregoing, uxpages shall be permitted to:
            monitor Customer’s use of the Services;
            report to the appropriate authorities any conduct by Customer (or Customer’s customers or end users) that uxpages reasonably believes violates any applicable law;
            provide any information, including the Confidential Information, required by law or regulation to be disclosed, or in response to a formal or informal request from a law enforcement or government agency; and
            disclose that uxpages is providing the Services to Customer and may include Customer’s name in promotional materials, including press releases and uxpages’s website.</p>
            <p>12. 4. uxpages and its employees shall not, during the time of rendering services to the Company or
            thereafter, disclose to anyone other than authorized employees of the Company (or persons
            designated by such duly authorized employees of the Company) or use for the benefit of
            Contractor and its employees or for any entity other than the Company, any information of a
            confidential nature, including but not limited to, information relating to: any such materials or
            intellectual property; any of the Company projects or programs; the technical, commercial or any
            other affairs of the Company; or, any confidential information which the Company has received
            from a third party.</p>
            <p>12. 5. During the performance of the Service, Customer shall not collect and/or store and/or share with uxpages following information of its end users (i) any medical or health related information; (ii) any personally identifiable information ; (iii) any identification documents issued by the government; and (iv) any financial information including but not limited to bank account and payment card details. In case it is found that Customer violates the terms of this Agreement or any other law, rule or regulation enacted by the concerned authorities, uxpages reserves the right to terminate the Agreement/Contract with immediate effect.</p>
            <h3>13. No Assurance of Compatibility</h3>
            <p>Customer acknowledges that uxpages makes no representation, warranty or assurance that Customer’s equipment and software will be compatible with uxpages’s equipment, software and systems or the Services.</p>
            <h3>14. Indemnification</h3>
            <p>Parties shall indemnify, defend and hold harmless each other (and their subsidiaries, affiliates, officers, employees, agents, partners, mandatories, vendors and licensors) of any and all Claims (including third-party Claims) arising as a result of or in relation to any breach of this Agreement or fault by the other party. Customer shall indemnify uxpages in relation to any activities conducted by Customer through the Services, or otherwise in relation to “Customer’s” products or services.</p>
            <h3>15. Governing Law</h3>
            <p>This Agreement shall be governed by and construed in accordance with the laws of France. Customer agrees, in the event any claim or suit is brought in connection with this Agreement, it shall be brought to the exclusive jurisdiction and venue of the courts of Paris, France. In any action to enforce this Agreement, including, without limitation, any action by uxpages for the recovery of fees due hereunder, Customer shall pay reasonable attorney’s fees and costs in connection with such action.</p>
            <h3>16. Severability</h3>
            <p>In the event that any one or more of the provisions contained herein shall, for any reason, be held to be invalid, illegal, or unenforceable in any respect, such invalidity, illegality, or unenforceability shall not affect any of the other provisions of this Agreement; and this Agreement shall be construed as if such provision(s) had never been contained herein, provided that such provision(s) shall be curtailed, limited, or eliminated only to the extent necessary to remove the invalidity, illegality, or unenforceability.</p>
            <h3>17. Waiver</h3>
            <p>No waiver by uxpages of any breach by Customer of any of the provisions of this Agreement shall be deemed a waiver of any preceding or succeeding breach of this Agreement. No such waiver shall be effective unless it is in writing signed by the parties hereto and then only to the extent expressly set forth in such writing.</p>
            <h3>18. Assignment</h3>
            <p>Neither party may assign or transfer this Agreement or any rights or obligations hereunder, in whole or in part, except with the prior written consent of the other party, which shall not be withheld unreasonably; provided that uxpages may assign or transfer this Agreement, or any rights or obligations hereunder, in whole or in part: (i) to an affiliate of uxpages; or (ii) in connection with a merger, amalgamation or sale of all or a substantial part of the business of uxpages, which assignments and/or transfers shall operate novation and discharge uxpages hereunder. A change of control of Customer shall be deemed to be an assignment and transfer hereunder and shall be governed by the requirements of this provision.</p>
            <p>The terms and conditions along with privacy policies with all references, constitute the sole and entire Agreement of the parties to this Agreement with respect to the subject matter contained herein, and supersede all prior terms and conditions which were agreed by Customer.</p>
            <h3>19. Non-Solicitation</h3>
            <p>During the term of this Agreement and after any termination of this
            Agreement, uxpages will not, without the prior written consent of the Company, either directly
            or indirectly, on uxpages's own behalf or in the service or on behalf of others, solicit or attempt
            to solicit, divert or hire away any person employed by the Company, or any customer of the
            Company.</p>
            <h3>20. Termination</h3>
            <p>20.1 Notice of Termination. The Agreement may be terminated by either the Company or uxpages at any time for any reason, with or without cause, by giving 30 days from written notice of termination.</p>
            <p>20.2 Payment Upon Termination. The Company will pay uxpages for all Services performed
            by uxpages through the date of termination.</p>
            <p>20.3 Termination by Customer: Customer may terminate the Agreement before the end of the Term without liability (except for amounts due for Services provided up to the effective date of termination) if uxpages: Fails to provide the Services in accordance with the terms of the Agreement, such failure causes material harm to Customer and uxpages does not cure the failure within 10 days of receipt of the notice in writing from Customer describing the failure in reasonable detail.
            Materially violates any other provision of this Agreement and fails to cure the violation within 30 days of receipt of the notice in writing from Customer describing the violation in reasonable detail.
            In the event that the Agreement is terminated pursuant to this Section, uxpages will return the fees paid to it for Services not yet performed pro rata.</p>
            <p>20.4. Termination/Suspension by uxpages: uxpages may terminate the Agreement or suspend the Services before the end of the Term without liability: On 30 days’ notice to Customer, if Customer is overdue on the payment of any amount due under this Agreement; If Customer materially violates any other provision of the Agreement and fails to cure the violation within 10 days’ notice in writing from uxpages, describing the violation in reasonable detail; or
            Immediately on written notice upon Customer becoming insolvent or bankrupt within the meaning of the Bankruptcy and Insolvency Laws. During suspension, Customer will not be able to get access to any service provided by contractor. uxpages will use commercially reasonable efforts to give Customer an advance notice in writing of suspension of service unless a law enforcement or governmental agency directs otherwise or suspension without notice is necessary to protect uxpages or its other customers.</p>
            <p>20.5 Following suspension: uxpages shall keep the account of Customer suspended for the reasons stated above for a maximum period of 1 year; thereafter, the account stands deleted and Customer’s data/information shall be deleted from the database of uxpages. But on special request and on being assured in time by Customer about resumption of Service, uxpages may extend the period of suspension and retain the data/information for further specified period of time as agreed.</p>
            <p>20.6 Following termination: It is agreed that in case of termination, the fees owed to uxpages as per the agreement will not be cancelled or waived. Customer’s data and account settings shall be irrevocably deleted within 30 days from the date of termination. It shall be Customer’s exclusive responsibility to secure all necessary data from Customer’s account prior to termination.</p>
            {/* <h3>21. Indemnification</h3>
            <p>21.1 Indemnification by Contractor. Contractor agrees to indemnify and hold harmless
            Company and its officers, directors, employees and agents, from and against all claims, liabilities,
            losses, costs, damages, judgments, penalties, fines, attorneys' fees, court costs and other legal
            expenses, insurance deductibles and all other expenses arising out of or relating to, directly or
            indirectly, from:(i) the negligent, grossly negligent, or intentional act or omission of Contractor or its directors,
            officers, employees, agents or Contractors,(ii) Contractor's failure to perform any of its obligations under this Agreement, and, ((iii) any act or omission of Contractor in connection with the Work.</p>
            <p>21.2 Notification. Company will promptly notify Contractor of any claim for indemnification.</p>
            <p>21.3 Survival. Contractor's obligations under this Section 10 shall survive termination or expiration
            of the agreement.</p>
            */}
            <h3>21. General Provisions</h3>
            <p>21.1 Entire Agreement. The Agreement constitutes the entire agreement between the parties, and
            supersedes all prior agreements, representations and understandings of the parties, written or oral.</p>
            <p>21.2 Counterparts. The Agreement may be executed in counterparts, each of which shall be
            deemed to be an original, but all of which, taken together, shall constitute one and the same
            agreement.</p>
            <p>21.3 Amendment. The Agreement may be amended only by written agreement of the parties.</p>
            <p>21.4 Notices. All notices permitted or required under this Agreement shall be in writing and shall be
            delivered in person or mailed by first class, registered or certified mail, postage prepaid, to the
            address of the party specified in this Agreement or such other address as either party may specify in
            writing. Such notice shall be deemed to have been given upon receipt.</p>
            <p>21.5 Assignment. The Agreement shall not be assigned by either party without the consent of the
            other party.</p>
            <p>21.6 Governing Law. The Agreement shall be governed by and construed in accordance with the
            laws of the Country of France, without regard to its conflict of laws rules.</p>
            <p>21.7 No Waiver of Rights. A failure or delay in exercising any right, power or privilege in respect
            of this Agreement will not be presumed to operate as a waiver, and a single or partial exercise of
            any right, power or privilege will not be presumed to preclude any subsequent or further exercise,
            of that right, power or privilege or the exercise of any other right, power or privilege.</p>
            <h3>23. Support</h3>
            <p>For any questions regarding these Terms Of Service, feel free to contact us by email to hola@uxpages.com</p>
            {/*End terms*/}
        </div>{/*column*/}
    </div>{/*row*/}
    <Footer/>
</div>
</PageTransition>
)

