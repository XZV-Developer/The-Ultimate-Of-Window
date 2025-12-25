import { useState } from "react";
import Link from "next/link";
import AnimatedMessage from "../components/AnimatedMessage";
// Impor file CSS yang nanti kita buat
import styles from "../styles/Chaos.module.css";

export default function Index() {
  const [isSplit, setIsSplit] = useState(false);

  return (
    <div className={styles.container}>
      {/* TOMBOL START PROJECT (DI TENGAH POJOK BAWAH) */}
      {!isSplit && (
        <button className={styles.openBtn} onClick={() => setIsSplit(true)}>
          INI BAKAL KACAU ⚡
        </button>
      )}

      {/* TOMBOL CLOSE (MENGGANTIKAN POSISI START) */}
      {isSplit && (
        <button className={styles.closeBtn} onClick={() => setIsSplit(false)}>
          ✕
        </button>
      )}

      {/* PANEL KIRI (THE COLLAB) */}
      <div className={`${styles.window} ${styles.left} ${isSplit ? styles.splitActive : ""}`}>
        <div className={styles.contentLeft}>
          <h1>THE<br />COLLAB</h1>
          <p>Proyek open source imajinasi 8.000 orang.</p>
          
          {/* STICKER CUSTOM DI BAWAH TEXT */}
          <img src="/sticker-kiri.png" className={styles.sticker} alt="Sticker" />
          
          {/* FITUR ASLI (PINDAH KE SINI) */}
          <div className={styles.originalContent}>
            <h2>Selamat datang!</h2>
            <AnimatedMessage />
          </div>
        </div>
      </div>

      {/* PANEL KANAN (CHAOS ORDER) */}
      <div className={`${styles.window} ${styles.right} ${isSplit ? styles.splitActive : ""}`}>
        <div className={styles.contentRight}>
          {/* STICKER CUSTOM DI ATAS TEXT */}
          <img src="/sticker-kanan.png" className={styles.sticker} alt="Sticker" />
          
          <h1>CHAOS<br />ORDER</h1>
          <p>Tulis kodemu, kirim PR, dan jadilah bagian dari sejarah.</p>

          {/* TOMBOL ASLI (PINDAH KE SINI) */}
          <div className={styles.buttonGroup}>
             <Link href="/home">
               <button className={styles.navBtn}>MULAI</button>
             </Link>
             <Link href="/nbrthx">
               <button className={styles.navBtn}>SVGSTEGO</button>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
          }
