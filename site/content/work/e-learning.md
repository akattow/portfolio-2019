---
author: "Kat Tow"
linktitle: "E-Learning at IFEBP"
title: "E-Learning at IFEBP"
subtitle: "UX and visual design"
weight: 9
---
{{% section id="if-top" %}}
### Introduction

When I joined the Online Learning Team at the International Foundation of Employee Benefit Plans, I was asked to redesign the visual elements in the company's e-learning courses. An initial appraisal of the team's tools and design revealed larger issues, and the result has been a transition to a new authoring tool with an entirely new visual design.

You can jump to:

* [Business Context] ( {{< relref "#if-context" >}})
* [Technology Analysis] ( {{< relref "#if-technology" >}})
* [Visual Design] ( {{< relref "#if-design" >}})
* [Implementation and Iteration] ( {{< relref "#if-implementation" >}})
* [Conclusion] ( {{< relref "#if-conclusion" >}})
{{% /section %}}

{{% section id="if-context" %}}
### Business Context

In 2017, the International Foundation of Employee Benefit Plans (IFEBP) had a catalogue of e-learning courses that were badly out-of-date technologically and visually. To the end user, the courses appeared to be interactive slides - a fixed size floating in a window, clicked through page-by-page. Most of the courses were not responsive or mobile-friendly, and the dense content (benefits and legalese) was crammed onto fixed-size pages.

{{% flex %}}
{{< figure src="/img/ifebp/lectora-preview.png" caption="A course page in the browser" class="flex-figure" >}}

{{< figure src="/img/ifebp/lectora.png" caption="The WYSIWYG authoring software" class="flex-figure" >}}
{{% /flex %}}

Among other, more granular problems, these courses were difficult not only for the end user but also the e-learning team members. The authoring software was slow and difficult to use. It took a WYSIWYG approach, where each page had to be individually adjusted and designed, generating inline styles for each element. For the team's instructional designers, who are experts in adult learning theory, research, and writing (not design), this made it very difficult to update courses.

Recognizing these larger systemic problems for both the implementation and the end user, I proposed tranistioning to a new authoring tool that would allow the instructional designers to focus on content, not design. The new tool would have to conform to modern web standards, modular, permit CSS sheets, and support additional functionality for end users. 

{{% section id="if-technology" %}}
### Technology Analysis

After compiling requirements for the new authoring tool, I researched the available technology. Once I had identified a few tools that met the requirements, I designed and built short demo courses in each tool. Unfortunately, these demos are no longer available as each tool I tested is a web app, and I was unable to download and save my files as part of the free trials I utilized.

I presented my findings, including an analysis of each tool and the demo courses, to my team. We selected a tool to move forward with, and I began the initial design phase.

{{% /section %}}

{{% section id="if-design" %}}
### Visual Design
I created a number of visual design concepts initially, ranging from bright, full-color designs to more reserved, academic approaches. With input from the online learning team, we identified two designs that we felt were engaging and exciting, while still emphasizing the (dense and often complicated) content the courses teach. I developed each design further, building demo courses with each design and identical content. We tested the two final designs with key internal stakeholders as well as internal users.

From here, we selected a final design and I began rebuilding courses in the new authoring tool.

{{< figure src="/img/ifebp/adapt.png" caption="The new visual design" >}}

{{% /section %}}

{{% section id="#if-implementation" %}}
### Implementation and Iteration
Content type and layout needs do change between e-learning courses. Consequently, as courses were built one-by-one, new challenges arose that needed new design solutions.  Additionally, our Customer Service team solicits feedback from external users.

I approached course design as an iterative process. Addressing new challenges in course content and incorporating user feedback, I updated the design throughout the year-long process of updating the course library. As a design team of one and a front-end developer, I wrote and maintained a custom LESS stylesheet to ensure all of the courses followed the same design and rules.

You can explore the [interactive demo course] (https://www.ifebp.org/education/elearningcourses/samplecourse/index.html) on the IFEBP website.

{{% /section %}}

{{% section id="if-conclusion"%}}
### Conclusion
The courses are now built in a modern, responsive web framework that enables users on any device to access their learning. The transition to the new course authoring tool, coupled with the visual redesign, has resulted in an improvement in post-course evaluations from users.

For the online learning team, the new authoring tool has also reduced the time to develop a course (from authored text to fully reviewed and published course) by approximately 40%.
{{% /section %}}

Thanks for reading! You can always [jump back to the top] ( {{< relref "#if-top" >}} ).