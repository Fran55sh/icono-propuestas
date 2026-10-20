import ProposalD from "./propuesta-d/page";
import ProposalIndex from "@/components/proposal-index";
import { showProposalSelector } from "@/lib/site-config";

export { metadata, viewport } from "./propuesta-d/page";

export default function Index() {
  return showProposalSelector ? <ProposalIndex /> : <ProposalD />;
}