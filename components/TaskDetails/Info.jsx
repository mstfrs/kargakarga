import React from "react";
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Badge } from 'primereact/badge';

const Info = () => {
  return (
    <div className="flex gap-[10px] p-[10px]">
      <div className="w-[165px] h-20 flex flex-col gap-3">
        <p className="text-[#475467] text-sm font-medium">Task Status</p>
        <p className="text-sm font-medium">Open</p>
      </div>
      <div className="w-[165px] h-20 flex flex-col gap-3">
        <p className="text-[#475467] text-sm font-medium">Assingment</p>
        <AvatarGroup>
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="normal" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="normal" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" size="normal" shape="circle" />              
                <Avatar label="+5" shape="circle" size="normal"/>
            </AvatarGroup>
      </div>
      <div className="w-[165px] h-20 flex flex-col gap-3">
        <p className="text-[#475467] text-sm font-medium">Priotry</p>
        <p className="text-sm font-medium"><img src="/images/redflag.png" alt="" /></p>
      </div>
    </div>
  );
};

export default Info;
