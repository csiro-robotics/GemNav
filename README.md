# GemNav project page

Project website for **GemNav: Discrete-Token Visual Robot Navigation using a Multimodal Large Language Model** ([arXiv:2607.06882](https://arxiv.org/abs/2607.06882)).

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Videos

Clips in `static/videos/` were cut from the master video `gemnav_v5_review_720p.mp4` and re-encoded (H.264, 720p, no audio except `gemnav_overview.mp4`). To swap a clip, replace the file with one of the same name. A missing file shows a "coming soon" box instead.

| File | Where it appears |
| --- | --- |
| `teaser.mp4` | Top of page |
| `anymal_image_goal.mp4`, `rover_pose_offroad.mp4`, `spot_workshop.mp4`, `detour_course.mp4` | Rollout carousel (some reused below) |
| `gemnav_overview.mp4` | Video section (full master video) |
| `warehouse_comparison.mp4`, `chemical_yard_comparison.mp4` | Pose-conditioned navigation |
| `offroad_three_robots.mp4` | Off-road navigation |

Figures in `static/images/` are rendered from the paper's `resources/` folder.

## Credits

Adapted from the [Nerfies](https://github.com/nerfies/nerfies.github.io) template, licensed under [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/).
