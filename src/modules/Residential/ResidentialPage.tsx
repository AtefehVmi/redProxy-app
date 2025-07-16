"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import ResidentialFirstView from "@/components/ResidentialFirstView/ResidentialFirstView";
import ResidentialImage from "@public/icons/residential.svg";
import CheckIcon from "@public/icons/blue-check.svg";
import BandwidthStatCards from "./BandwidthStatCards";
import StatCard from "./StatCard";
import IpRoyalIcon from "@public/icons/ip-royal.svg";
import NetNutIcon from "@public/icons/net-nut.svg";
import OxyLabsIcon from "@public/icons/oxy-labs.svg";

const CHART_DATA = [
  {
    month: "Page A",
    usage: 2400,
  },
  {
    month: "Page B",
    usage: 1398,
  },
  {
    month: "Page C",
    usage: 3800,
  },
  {
    month: "Page D",
    usage: 3908,
  },
  {
    month: "Page E",
    usage: 4800,
  },
  {
    month: "Page F",
    usage: 3800,
  },
  {
    month: "Page G",
    usage: 4300,
  },
];

const data = [
  {
    configName: "Residential for reddit",
    dataUsed: 4920000000,
    dataUsage: CHART_DATA,
    portType: "SOCKS5",
    geoLocation: "Germany",
    format: "hostname:port:username:password",
    username: "elixrgfx@protonmail.com",
    rotation: "Sticky",
    quantityGenerated: 720,
    port: 6608,
    password: "prrrrrjhhkjdsfiued",
  },
  {
    configName: "Residential for reddit",
    dataUsed: 4920000000,
    dataUsage: CHART_DATA,
    portType: "SOCKS5",
    geoLocation: "Germany",
    format: "hostname:port:username:password",
    username: "elixrgfx@protonmail.com",
    rotation: "Sticky",
    quantityGenerated: 720,
    port: 6608,
    password: "prrrrrjhhkjdsfiued",
  },
  {
    configName: "Residential for reddit",
    dataUsed: 4920000000,
    dataUsage: CHART_DATA,
    portType: "SOCKS5",
    geoLocation: "Germany",
    format: "hostname:port:username:password",
    username: "elixrgfx@protonmail.com",
    rotation: "Sticky",
    quantityGenerated: 720,
    port: 6608,
    password: "prrrrrjhhkjdsfiued",
  },
  {
    configName: "Residential for reddit",
    dataUsed: 4920000000,
    dataUsage: CHART_DATA,
    portType: "SOCKS5",
    geoLocation: "Germany",
    format: "hostname:port:username:password",
    username: "elixrgfx@protonmail.com",
    rotation: "Sticky",
    quantityGenerated: 720,
    port: 6608,
    password: "prrrrrjhhkjdsfiued",
  },
  {
    configName: "Residential for reddit",
    dataUsed: 4920000000,
    dataUsage: CHART_DATA,
    portType: "SOCKS5",
    geoLocation: "Germany",
    format: "hostname:port:username:password",
    username: "elixrgfx@protonmail.com",
    rotation: "Sticky",
    quantityGenerated: 720,
    port: 6608,
    password: "prrrrrjhhkjdsfiued",
  },
];

const ResidentialPage = () => {
  const params = useSearchParams();
  const limit = params.get("limit") ? parseInt(params.get("limit")!) : 4;
  const offset = params.get("offset") ? parseInt(params.get("offset")!) : 0;

  const paginatedData = data.slice(offset, offset + limit);

  return (
    <div className="w-full h-full">
      <p className="text-xl font-semibold text-white">
        New Residential configuration
      </p>
      <p className="text-grey-500 text-sm mt-2">
        Configurate your new proxy settings
      </p>

      <ResidentialFirstView
        numberColor="bg-blue-100"
        color="bg-blue-100/15"
        desc="A Residential Proxy is an intermediary server that  routes your internet traffic through a real residential IP address  provided by an Internet Service Provider (ISP). Unlike datacenter  proxies (which come from cloud servers), residential proxies use IPs  assigned to actual home devices, making them appear as legitimate,  organic users rather than bots or automated traffic."
        title="Residential Proxy"
        className="my-8"
        image={ResidentialImage}
        checkIcon={CheckIcon}
      />

      <div className="grid grid-cols-9 gap-6">
        <BandwidthStatCards
          className="col-span-3"
          total_gb="345"
          netNut="12"
          ipRoyal="12"
          oxyLabs="12"
        />

        <StatCard
          icon={IpRoyalIcon}
          name="IP Royal"
          gb={24}
          percent={60}
          dataUsage={CHART_DATA}
          className="col-span-2"
        />

        <StatCard
          icon={NetNutIcon}
          name="Net Nut"
          gb={24}
          percent={-20}
          dataUsage={CHART_DATA}
          className="col-span-2"
        />

        <StatCard
          icon={OxyLabsIcon}
          name="Oxylabs"
          plan="10 Plans"
          percent={40}
          dataUsage={CHART_DATA}
          className="col-span-2"
        />
      </div>
    </div>
  );
};

export default ResidentialPage;
