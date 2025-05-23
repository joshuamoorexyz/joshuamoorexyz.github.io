"use client";

import React, { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import { metadata } from "./metadata";

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-3xl space-y-8 bg-white print:space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-poppins text-base text-muted-foreground print:text-[12px]">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-poppins text-sm text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:no-underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-poppins text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}

              {RESUME_DATA.contact.social.map((social) => (
                social.name === "Resume" ? (
                  <Button
                    key={social.name}
                    className="flex items-center justify-center h-8 px-2"
                    variant="outline"
                    asChild
                  >
                    <a href={social.url}>resumé</a>
                  </Button>
                ) : (
                  <Button
                    key={social.name}
                    className="size-8"
                    variant="outline"
                    size="icon"
                    asChild
                  >
                    <a href={social.url}>
                      <social.icon className="size-4" />
                    </a>
                  </Button>
                )
              ))}

            </div>
            <div className="hidden flex-col gap-x-1 font-poppins text-sm text-muted-foreground print:flex print:text-[12px]">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>

        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-poppins text-base text-muted-foreground print:text-[12px]">
            {RESUME_DATA.summary}
          </p>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.id}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <div className="font-semibold leading-none">
                      {education.school}
                    </div>
                    <div className="text-base tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 print:text-base">
                  <div className="flex justify-between items-center">
                    {/* Make degree the same size as university name */}
                    <span className="text-base">{education.degree}</span>
                    {/* <span className="text-base text-gray-500">
                      GPA: {education.gpa} / 4.00
                    </span> */}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.id}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <div className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none text-base">
                      <a className="hover:no-underline" href={work.link}>
                        {work.company}
                      </a>
                    </div>
                    <div className="text-base tabular-nums text-gray-500">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>

                  <h4 className="text-base font-poppins leading-none print:text-[12px]">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent
                  className="mt-2 text-base print:text-[10px]"
                  dangerouslySetInnerHTML={{ __html: work.description }}
                />
              </Card>
            );
          })}
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                  isActive={project.isActive} // Pass the isActive prop
                />
              );
            })}
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return (
                <Badge className="text-sm print:text-[10px]" key={skill}>
                  {skill}
                </Badge>
              );
            })}
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Extracurricular Activities</h2>
          {RESUME_DATA.extracurricularActivities.map((activity) => {
            return (
              <Card key={activity.id}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                  <div className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none text-base">
                  <a className="hover:no-underline" href={activity.link}>
                      {activity.organization}
                    </a>
                    </div>
                    <div className="text-base tabular-nums text-gray-500">
                      {activity.start} - {activity.end}
                    </div>
                  </div>
                <h4 className="text-base font-poppins leading-none print:text-[12px]">
                  {activity.role}
                </h4>
                <CardContent className="mt-2 text-base print:text-[10px]">
                  {activity.description}
                </CardContent>
                </CardHeader>
              </Card>
            );
          })}
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
