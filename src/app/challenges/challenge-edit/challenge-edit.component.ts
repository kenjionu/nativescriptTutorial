import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { PageRoute, RouterExtensions,  } from "@nativescript/angular";
import { take } from "rxjs";
import { ChallengeService } from "../challenges.service";

@Component({
  selector: "ns-challenge-edit",
  styleUrls: ["./challenge-edit.component.scss"],
  templateUrl: "./challenge-edit.component.html",
  moduleId: module.id,
})
export class ChallengeEditComponent implements OnInit {
  isCreating = true;
  title = "";
  description = "";
  formChallengeEdit = new FormGroup({
    title: new FormControl('', Validators.minLength(2)),
    description: new FormControl('')
  })
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: RouterExtensions,
    private pageRoute: PageRoute,
    private challengeService: ChallengeService
  ) {
  }

  ngOnInit(): void {
    this.pageRoute.activatedRoute.subscribe((activatedRoute) => {
      activatedRoute.paramMap.subscribe((paramMap) => {
        if (!paramMap.has("mode")) {
          this.isCreating = true;
        } else {
          this.isCreating = paramMap.get("mode") !== "edit";
        }

        if (!this.isCreating) {
          this.challengeService.currentChallenge
            .pipe(take(1))
            .subscribe((challenge) => {
              this.title = challenge.title;
              this.description = challenge.description;
            });
        }
      });
    });
  }

  onSubmit(title: string, description: string) {
    if (this.isCreating) {
      this.challengeService.createNewChallenge(title, description);
    } else {
      this.challengeService.updateChallenge(title, description);
    }
    console.log("title: " + title);
    console.log("description: " + description);
    this.router.backToPreviousPage();
  }


}
