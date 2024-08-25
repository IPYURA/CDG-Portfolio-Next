import styles from "@/styles/projects.module.scss";
import Slider from "@/components/Projects/Slider";
import Description from "@/components/Projects/Description";
import UsedStack from "@/components/Projects/UsedStack";
import StackBadge from "@/components/Projects/StackBadge";
import LinkGithub from "@/components/Projects/LinkGithub";
import LinkWeb from "@/components/Projects/LinkWeb";

import { insightData } from "@/projectData";

const Insight = () => {
  return (
    <div className={styles.detailWrap}>
      <Slider images={insightData.sliderImg} />
      <UsedStack>
        <StackBadge name="Next.js" />
        <StackBadge name="Typescript" />
      </UsedStack>
      <div className={styles.linkBox}>
        <span>방문하기: &nbsp;</span>
        <LinkGithub address="https://github.com/IPYURA/nextjs-project" />
        <LinkWeb address="https://www.eopinsight.com/" />
      </div>
      <Description>
        <h2 className={styles.title}>[{insightData.title}]</h2>
        <h3 className={styles.sectionTit}>작은 제목이들어갑니다.</h3>
        <div className={styles.desc}>
          이곳에는 내용이 들어갑니다 Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Nam nesciunt dolorum corporis iure quod. Excepturi
          voluptatem, alias consequatur libero quidem officia amet sequi
          corporis. Laudantium eligendi cum libero sunt laboriosam? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Officiis quos quasi
          numquam tenetur sequi cum tempore quam amet impedit pariatur totam
          nemo, ut veritatis, natus atque harum assumenda! Consequatur,
          obcaecati? Ratione pariatur nisi sapiente voluptatum omnis. Nisi neque
          ab magnam? Illum nostrum doloremque culpa soluta, vitae corporis. Cum,
          facilis aspernatur rem distinctio repudiandae obcaecati quae delectus
          beatae dignissimos, praesentium necessitatibus. Accusantium nam ea
          animi blanditiis itaque eveniet iure et! Qui, laudantium molestias
          assumenda nemo, libero exercitationem repudiandae architecto fugit
          maxime suscipit, aspernatur incidunt amet quae ea rerum recusandae
          quis commodi. Asperiores deleniti recusandae accusamus autem molestiae
          mollitia nisi reprehenderit laborum eveniet. Nemo, quam nostrum quos
          saepe quas voluptatum ducimus. Nisi non voluptatem accusantium
          consequuntur quo tempore corporis doloremque quaerat minus! Neque
          consequuntur laboriosam culpa impedit qui veniam, accusantium
          similique exercitationem explicabo tempora autem ipsa. Iure animi
          provident tempora! Neque, dignissimos. Eum itaque reiciendis quis
          sapiente necessitatibus architecto quasi aliquid placeat. Praesentium
          hic quia voluptate nemo delectus esse libero consequuntur odit
          blanditiis pariatur beatae optio, aspernatur laudantium nulla iure
          voluptas? Numquam, vitae id necessitatibus porro ex cupiditate
          deleniti dolore minima fugit. At debitis ut reprehenderit et in neque,
          sequi, natus esse delectus unde eos autem exercitationem consequuntur
          fuga architecto quidem consequatur numquam cumque. Fugiat hic
          excepturi numquam totam adipisci doloribus enim. Atque sequi provident
          beatae cum! Eaque, a. Voluptate eveniet atque eius error dolores sed,
          quis tempora sequi voluptas porro, praesentium velit unde saepe
          commodi fuga blanditiis libero, possimus similique repellendus?
          Voluptatem architecto odit, maxime quasi totam fugit porro cupiditate
          laborum. Magnam earum est quae voluptas eveniet! Corrupti, ipsam omnis
          nisi vel in repellat aperiam, odio, quos dicta voluptatibus
          perferendis est! Labore, eum. Explicabo, deleniti quidem. Nulla iure
          expedita animi voluptate quasi perferendis pariatur quis laboriosam
          doloremque unde aspernatur alias veniam accusantium mollitia, sed quos
          qui harum. Nam esse voluptatum facilis?
        </div>
      </Description>
    </div>
  );
};

export default Insight;
