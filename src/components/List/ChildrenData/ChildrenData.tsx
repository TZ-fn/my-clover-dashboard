import { useState } from "react";
import styles from "./ChildrenData.module.scss";
import { Child } from "../../../types/Client";

export default function ChildrenData({ children }: { children: Child[] }) {
  const [areChildrenVisible, setAreChildrenVisible] = useState(false);
  return (
    <td className={styles.childrenDataContainer}>
      <table className={styles.innerTable}>
        <thead>
          <tr>
            <th>
              {children.length > 0 && (
                <button className={styles.toggleVisBtn} onClick={() => setAreChildrenVisible(!areChildrenVisible)}>
                  {areChildrenVisible ? "▲" : "▼"}
                </button>
              )}
            </th>
          </tr>
        </thead>
        {areChildrenVisible && (
          <tbody>
            {children.map((child) => (
              <tr key={`${child.firstName + child.lastName}`}>
                <td>
                  {child.firstName} {child.lastName}, {child.dob}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </td>
  );
}
