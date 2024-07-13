import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://alchemy.com/?a=create-web3-dapp" target={"_blank"}>
				<img className={styles.alchemy_logo} src="/cw3d-logo.png"></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
		<ul className="sidebar-nav text-center leading-relaxed text-xl">
          <li>
            <Link href="/about" onClick={toggle}><p>About Us</p></Link>
          </li>
          <li>
            <Link href="/services" onClick={toggle}><p>Services</p></Link>
          </li>
          <li>
            <Link href="/contacts" onClick={toggle}><p>Contacts</p></Link>
          </li>
        </ul>
	);
}
