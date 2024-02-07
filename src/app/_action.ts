"use server";

import exp from "constants";
import prisma from "../../prisma/client";

export async function createUpgrade(upgradeName: string) {
  await prisma.networkUpgrades.create({
    data: {
      name: upgradeName,
    },
  });
  console.log("Upgrade created");
}

export async function getAllUpgrades() {
  const upgrades = await prisma.networkUpgrades.findMany({
    include: {
      consideredProposals: true,
      resources: true,
      updates: true,
      videos: true,
    },
  });
  return upgrades;
}

export async function getUpgrade(upgradeName: string) {
  const upgrade = await prisma.networkUpgrades.findUnique({
    where: {
      name: upgradeName,
    },
    include: {
      consideredProposals: true,
      resources: true,
      updates: true,
      videos: true,
    },
  });
  return upgrade;
}

export async function updateUpgrade(upgradeName: string, upgradeData: any) {
  const upgrade = await prisma.networkUpgrades.update({
    where: {
      name: upgradeName,
    },
    data: upgradeData,
  });
  console.log("Upgrade updated");
  return upgrade;
}

export async function deleteUpgrade(upgradeName: string) {
  await prisma.networkUpgrades.delete({
    where: {
      name: upgradeName,
    },
  });
  console.log("Upgrade deleted");
}

export async function addResourceToUpgrade(
  upgradeId: number,
  resourceData: any
) {
  const newResource = await prisma.upgradeResources.create({
    data: {
      link: resourceData.link,
      title: resourceData.title,
      NetworkUpgrades: {
        connect: {
          id: upgradeId,
        },
      },
    },
  });

  console.log("Resource added to upgrade");
  return newResource;
}

export async function deleteResourceFromUpgrade(resourceId: number) {
  await prisma.upgradeResources.delete({
    where: {
      id: resourceId,
    },
  });
  console.log("Resource deleted from upgrade");
}

export async function updateResourceFromUpgrade(
  resourceId: number,
  resourceData: any
) {
  const resource = await prisma.upgradeResources.update({
    where: {
      id: resourceId,
    },
    data: resourceData,
  });
  console.log("Resource updated");
  return resource;
}

export async function addConsideredProposalToUpgrade(
  upgradeId: number,
  consideredProposalData: any
) {
  const newConsideredProposal = await prisma.consideredProposals.create({
    data: {
      name: consideredProposalData.name,
      description: consideredProposalData.description,
      discussionLink: consideredProposalData.discussionLink,
      proposalLink: consideredProposalData.proposalLink,
      videoLink: consideredProposalData.videoLink,
      NetworkUpgrades: {
        connect: {
          id: upgradeId,
        },
      },
    },
  });

  console.log("Considered Proposal added to upgrade");
  return newConsideredProposal;
}

export async function deleteConsideredProposalFromUpgrade(
  consideredProposalId: number
) {
  await prisma.consideredProposals.delete({
    where: {
      id: consideredProposalId,
    },
  });
  console.log("Considered Proposal deleted from upgrade");
}

export async function updateConsideredProposalFromUpgrade(
  consideredProposalId: number,
  consideredProposalData: any
) {
  const consideredProposal = await prisma.consideredProposals.update({
    where: {
      id: consideredProposalId,
    },
    data: consideredProposalData,
  });
  console.log("Considered Proposal updated");
  return consideredProposal;
}

export async function addUpdatetoUpgrade(upgradeId: number, updateData: any) {
  const newUpdate = await prisma.upgradeUpdates.create({
    data: {
      title: updateData.title,
      link: updateData.link,
      linkTitle: updateData.linkTitle,
      date: updateData.date,
      NetworkUpgrades: {
        connect: {
          id: upgradeId,
        },
      },
    },
  });

  console.log("Update added to upgrade");
  return newUpdate;
}

export async function deleteUpdateFromUpgrade(updateId: number) {
  await prisma.upgradeUpdates.delete({
    where: {
      id: updateId,
    },
  });
  console.log("Update deleted from upgrade");
}

export async function updateUpdateFromUpgrade(
  updateId: number,
  updateData: any
) {
  const update = await prisma.upgradeUpdates.update({
    where: {
      id: updateId,
    },
    data: updateData,
  });
  console.log("Update updated");
  return update;
}

export async function addVideoToUpgrade(upgradeId: number, videoData: any) {
  const newVideo = await prisma.upgradeVideos.create({
    data: {
      title: videoData.title,
      link: videoData.link,
      NetworkUpgrades: {
        connect: {
          id: upgradeId,
        },
      },
    },
  });

  console.log("Video added to upgrade");
  return newVideo;
}

export async function deleteVideoFromUpgrade(videoId: number) {
  await prisma.upgradeVideos.delete({
    where: {
      id: videoId,
    },
  });
  console.log("Video deleted from upgrade");
}

export async function updateVideoFromUpgrade(videoId: number, videoData: any) {
  const video = await prisma.upgradeVideos.update({
    where: {
      id: videoId,
    },
    data: videoData,
  });
  console.log("Video updated");
  return video;
}

export async function addBlog(blogData: any) {
  await prisma.blogs.create({
    data: {
      title: blogData.title,
      link: blogData.link,
      date: blogData.date,
    },
  });
}

export async function getAllBlogs() {
  const blogs = await prisma.blogs.findMany();
  return blogs;
}

export async function updateBlog(blogId: number, blogData: any) {
  await prisma.blogs.update({
    where: {
      id: blogId,
    },
    data: {
      title: blogData.title,
      link: blogData.link,
      date: blogData.date,
    },
  });
}

export async function deleteBlog(blogId: number) {
  await prisma.blogs.delete({
    where: {
      id: blogId,
    },
  });
}

export async function getBlog(blogId: number) {
  const blog = await prisma.blogs.findUnique({
    where: {
      id: blogId,
    },
  });
  return blog;
}

export async function addEvent(eventData: any) {
  await prisma.events.create({
    data: {
      name: eventData.name,
      link1: eventData.link1,
      link2: eventData.link2,
      link3: eventData.link3,
      linktitle1: eventData.linktitle1,
      linktitle2: eventData.linktitle2,
      linktitle3: eventData.linktitle3,
    },
  });
}

export async function getAllEvents() {
  const events = await prisma.events.findMany();
  return events;
}

export async function updateEvent(eventId: number, eventData: any) {
  await prisma.events.update({
    where: {
      id: eventId,
    },
    data: {
      name: eventData.title,
      link1: eventData.link1,
      link2: eventData.link2,
      link3: eventData.link3,
      linktitle1: eventData.linktitle1,
      linktitle2: eventData.linktitle2,
      linktitle3: eventData.linktitle3,
    },
  });
}

export async function deleteEvent(eventId: number) {
  await prisma.events.delete({
    where: {
      id: eventId,
    },
  });
}

export async function getEvent(eventId: number) {
  const event = await prisma.events.findUnique({
    where: {
      id: eventId,
    },
  });
  return event;
}

export async function addYoutubeVideo(videoData: any) {
  await prisma.youtubeLink.create({
    data: {
      title: videoData.title,
      link: videoData.link,
    },
  });
}

export async function getYoutubeVideo(videoId: number) {
  const video = await prisma.youtubeLink.findUnique({
    where: {
      id: videoId,
    },
  });
  return video;
}

export async function getAllYoutubeVideos() {
  const videos = await prisma.youtubeLink.findMany();
  return videos;
}

export async function updateYoutubeVideo(videoId: number, videoData: any) {
  await prisma.youtubeLink.update({
    where: {
      id: videoId,
    },
    data: {
      title: videoData.title,
      link: videoData.link,
    },
  });
}

export async function deleteYoutubeVideo(videoId: number) {
  await prisma.youtubeLink.delete({
    where: {
      id: videoId,
    },
  });
}

export async function getAllSurveys() {
  const surveys = await prisma.surveys.findMany();
  return surveys;
}

export async function getSurvey(surveyId: number) {
  const survey = await prisma.surveys.findUnique({
    where: {
      id: surveyId,
    },
  });
  return survey;
}

export async function addSurvey(surveyData: any) {
  await prisma.surveys.create({
    data: {
      title: surveyData.title,
      link: surveyData.link,
    },
  });
}

export async function updateSurvey(surveyId: number, surveyData: any) {
  await prisma.surveys.update({
    where: {
      id: surveyId,
    },
    data: {
      title: surveyData.title,
      link: surveyData.link,
    },
  });
}

export async function deleteSurvey(surveyId: number) {
  await prisma.surveys.delete({
    where: {
      id: surveyId,
    },
  });
}

export async function toggleSurveyState(surveyId: number) {
  const survey = await prisma.surveys
    .findUnique({
      where: {
        id: surveyId,
      },
    })
    .then((res) => res);
  await prisma.surveys.update({
    where: {
      id: surveyId,
    },
    data: {
      completed: !survey?.completed,
    },
  });
}
